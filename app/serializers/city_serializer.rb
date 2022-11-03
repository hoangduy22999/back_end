# frozen_string_literal: true

class CitySerializer < ActiveModel::Serializer
  attributes %i[id name slug]

  has_many :districts
end
