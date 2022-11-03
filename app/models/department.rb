# frozen_string_literal: true

class Department < ApplicationRecord
  # relationships
  has_many :user_departments, dependent: :destroy
  has_many :users, through: :user_departments
end
