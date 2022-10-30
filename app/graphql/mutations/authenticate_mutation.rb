# frozen_string_literal: true

module Mutations
  class AuthenticateMutation < BaseMutation
    # arguments passed to the `resolve` method
    argument :email, String, required: true
    argument :password, String, required: true

    # return type from mutation
    type Types::AuthenticateType

    def resolve(params)
      attributes = params
      command = AuthenticateUser.call(attributes[:email], attributes[:password])
      if command.success?
        { token: command.result, user: current_user }
      else
        { error: command.errors[:user_athentication] }
      end
    end
  end
end
