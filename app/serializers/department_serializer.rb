# frozen_string_literal: true

class DepartmentSerializer < ActiveModel::Serializer
  attributes %i[id name]

  has_many :users
end
