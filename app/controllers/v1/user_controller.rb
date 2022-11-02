class V1::UserController < ApplicationController
  def profile
    if can? :read, User.last
      render json: current_user
    end
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
      render json: {errors: "Permission denied"}, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:last_name, :first_name, :email, :phone)
    end
end