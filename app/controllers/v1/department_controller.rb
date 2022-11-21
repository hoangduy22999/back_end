# frozen_string_literal: true

module V1
  class DepartmentController < ApplicationController
    before_action :set_department, only: %i[edit update]

    def index
      render json: Department.includes(:users).all.ransack(params[:where]).result
                             .paginate(page: params[:page] || 1, per_page: params[:per_page] || 10)
    end

    def create
      department = Department.new(department_params)
      if can? :create, department
        if department.save
          render json: { message: 'Department is successfully created', department: department }, status: :created
        else
          render json: department.errors, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    def edit
      if can? :read, @department
        render json: { message: 'Success', department: @department }, status: :ok
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    def update
      if can? :update, @department
        if @department.update(department_params)
          render json: { message: 'Department is successfully updated', department: @department }, status: :created
        else
          render json: @department.errors, status: :unprocessable_entity
        end
      else
        render json: { errors: 'Permission denied' }, status: :unprocessable_entity
      end
    end

    private

    def department_params
      params.require(:department).permit(:name, :manager_id,
                                         user_departments_attributes: %i[id user_id role start_date end_date])
    end

    def set_department
      @department = Department.includes(:users).find_by(id: params[:id])
    end
  end
end
