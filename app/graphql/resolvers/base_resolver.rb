# frozen_string_literal: true

# app/graphql/resolvers/base.rb
module Resolvers
  class BaseResolver < GraphQL::Schema::Resolver
    # if you have a custom argument class, you can attach it:
    argument_class Types::BaseArgument

    private

    def current_user
      context.to_h[:current_user]
    end
  end
end
