# frozen_string_literal: true

class AuthorizeApiRequest
  prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_reader :headers

  def user
    token = decoded_auth_token
    @user ||= User.find_by_id(token[:user_id]) if token && expired_token?(token)
    @user || errors.add(:token, 'Invalid token') && nil
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    return headers['Authorization'].split(' ').last if headers['Authorization'].present?

    errors.add(:token, 'Missing token')

    nil
  end

  def expired_token?(token)
    token[:sign_in_at] && DateTime.parse(token[:sign_in_at]) + EXPIRED_TIME.days > Time.zone.now
  end
end
