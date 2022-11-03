# frozen_string_literal: true

module V1
  class UserController < ApplicationController
    def profile
      return unless can? :read, User.last

      render json: current_user
    end

    def create
      password = User.random_password
      user = User.new(user_params.merge(password: password, password_confirmation: password))
      if can? :create, user
        if user.save
          UserMailer.with(user: user).welcome_email.deliver_later
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:last_name, :first_name, :email, :phone, :district_id, :address, :gender)
    end
  end
end
