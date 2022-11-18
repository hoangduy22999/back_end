# frozen_string_literal: true

module V1
  class DepartmentController < ApplicationController
    def index
      render json: Department.includes(:users).all
    end
  end
end
