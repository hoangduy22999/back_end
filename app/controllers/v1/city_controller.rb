# frozen_string_literal: true

module V1
  class CityController < ApplicationController
    def index
      render json: City.all.includes(:districts).paginate(page: params[:page] || 1, per_page: params[:per_page] || 10),
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
  end
end
