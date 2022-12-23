# frozen_string_literal: true

module V1
  class UserController < ApplicationController
    def index
      render json: User.all.ransack(params[:where]).result
                        .order(params[:column] || "created_at" => params[:order] || "desc")
                        .paginate(page: params[:page] || 1, per_page: params[:per_page] || 10)
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
          created_render(user)
        else
          validate_error(user)
        end
      else
        permission_error
      end
    end

    def update
      invalid_error(User)

      if can? :update, user
        if user.update(user_params)
          updated_render(user)
        else
          validate_error(user)
        end
      else
        permission_error
      end
    end

    def update_profile
      if current_user.update(user_params)
        updated_render(current_user)
      else
        validate_error(current_user)
      end
    end

    private

    def user_params
      params.require(:user).permit(:last_name, :first_name, :email, :phone, :district_id, :address, :gender, :birthday, :avatar,
                                   user_departments_attributes: %i[id department_id role start_date end_date _destroy])
    end
  end
end
