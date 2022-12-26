# frozen_string_literal: true

# The Application Controller is base for application controllers
class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  def permission_error
    return render json: { errors: 'Permission denied' }, status: :unprocessable_entity
  end

  def validate_error(record)
    return render json: record.errors, status: :unprocessable_entity
  end

  def updated_render(record)
    return render json: record, status: :ok
  end

  def created_render(record)
    return render json: record, status: :created
  end

  def sucess_render(record)
    return render json: record, status: :ok
  end

  def find_record(model)
    id = params[:id]
    record = model.find_by_id(id)
    return render json: { errors: "Couldn't find #{model.to_s.downcase} with id = #{id}" } unless record
    record
  end

  def find_records(model, relationship)
  end

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
