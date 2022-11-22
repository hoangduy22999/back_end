# frozen_string_literal: true

module V1
  class DepartmentController < ApplicationController
    before_action :set_department, only: %i[edit update]

    def index
      render json: Department.includes(:users).all.ransack(params[:where]).result
                             .order(params[:column] || "created_at" => params[:order] || "desc")
                             .paginate(page: params[:page] || 1, per_page: params[:per_page] || 10)
    end

    def create
      department = Department.new(department_params)
      if can? :create, department
        if department.save
          created_render(department)
        else
          validate_error(department)
        end
      else
        permission_error
      end
    end

    def edit
      if can? :read, @department
        sucess_render(@department)
      else
        permission_error
      end
    end

    def update
      if can? :update, @department
        if @department.update(department_params)
          updated_render(@department)
        else
          validate_error(@department)
        end
      else
        permission_error
      end
    end

    private

    def department_params
      params.require(:department).permit(:name, :manager_id,
                                         user_departments_attributes: %i[id user_id role start_date end_date _destroy])
    end

    def set_department
      @department = find_record(Department)
    end
  end
end
