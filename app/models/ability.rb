# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    return unless user.present?

    can :read, user
    can :read, Department

    return unless user.role_admin?

    can :manage, User
    can :manage, Department
  end
end
