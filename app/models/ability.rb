# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
      return unless user.present?
      can :read, user
      return unless user.role_admin?
      can :manage, User
  end
end
