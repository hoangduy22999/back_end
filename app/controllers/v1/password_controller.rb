# frozen_string_literal: true

module V1
  class PasswordController < ApplicationController
    skip_before_action :authenticate_request

    def forgot
      return render json: { error: 'Email not present' } if params[:email].blank? # check if email is present

      user = User.find_by(email: params[:email]) # if present find user by email

      if user.present?
        user.generate_password_token! # generate pass token
        UserMailer.with(user: user).forgot_password.deliver_later
        render json: { status: 'ok' }, status: :ok
      else
        render json: { error: ['Email address not found. Please check and try again.'] }, status: :not_found
      end
    end

    def reset
      token = params[:token].to_s
      return render json: { error: 'Token not present' } if params[:email].blank?

      unless params[:password].eql?(params[:password_confirmation])
        return render json: { error: 'Password confirmation is invalid' }
      end

      user = User.find_by(reset_password_token: token)

      if user.present? && user.password_token_valid?
        if user.reset_password!(params[:password], params[:password_confirmation])
          render json: { status: 'ok' }, status: :ok
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: ['Link not valid or expired. Try generating a new link.'] }, status: :not_found
      end
    end
  end
end
