# frozen_string_literal: true

class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    { auth_token: JsonWebToken.encode(user_id: user.id, sign_in_at: Time.zone.now), role: user.role } if user
  end

  private

  attr_accessor :email, :password

  def user
    user = User.find_by_email(email)
    return user if user&.valid_password?(password)

    errors.add :user_athentication, 'invalid credentials'
    nil
  end
end
