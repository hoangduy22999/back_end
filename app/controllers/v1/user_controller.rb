# frozen_string_literal: true

module V1
  class UserController < ApplicationController
    def index
      if can? :read, User
        render json: User.all.paginate(page: params[:page] || 1, per_page: params[:per_page] || 10)
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    def profile
      render json: current_user
    end

    def create
      password = User.random_password
      user = User.new(user_params.merge(password: password, password_confirmation: password))
      if can? :create, user
        if user.save
          UserMailer.with(user: user).welcome_email.deliver_later
          render json: { message: 'User is successfully created', user: user }, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    def update
      user = User.find_by_id(params[:id])
      return render json: { errors: "Couldn't find user" } unless user

      if can? :update, user
        if user.update(user_params)
          render json: { message: 'User is successfully updated', user: user }, status: :ok
        else
          render json: user.errors, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    def update_profile
      if current_user.update(user_params)
        render json: { message: 'User is successfully updated', current_user: current_user },
               status: :ok
      else
        render json: current_user.errors, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:last_name, :first_name, :email, :phone, :district_id, :address, :gender, :birthday, :avatar,
                                   user_departments_attributes: %i[id department_id role])
    end
  end
end
