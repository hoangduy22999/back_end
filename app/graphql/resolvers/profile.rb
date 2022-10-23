# frozen_string_literal: true

module Resolvers
  class Profile < BaseResolver
    type Types::ProfileType, null: true

    def resolve
      User.first
    end
  end
end
