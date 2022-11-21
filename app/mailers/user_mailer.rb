# frozen_string_literal: true

class UserMailer < ApplicationMailer
  default from: 'user-hrm@gmail.com'

  def welcome_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

  def forgot_password
    @user = params[:user]
    @url = "http://192.168.152.33:3333/reset_password?token=#{@user.reset_password_token}"
    mail(to: @user.email, subject: 'Forgot Password Mail')
  end
end
