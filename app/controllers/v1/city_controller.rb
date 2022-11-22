# frozen_string_literal: true

module V1
  class CityController < ApplicationController
    before_action :set_city, only: %i[show]

    def index
      render json: City.all.includes(:districts)
                       .ransack(params[:where]).result
                       .order(params[:column] || "created_at" => params[:order] || "asc")
                       .paginate(page: params[:page] || 1, per_page: params[:per_page] || 10),
             status: :ok
    end

    def show
      city = City.find_by_id(params[:id])
      if city
        render json: city, status: :ok
      else
        render json: { errors: "Couldn't find city with id #{params[:id]}" }, status: :not_found
      end
    end

    private

    def set_city
      @city = find_record(City)
    end
  end
end
