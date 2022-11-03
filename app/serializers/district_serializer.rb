# frozen_string_literal: true

class DistrictSerializer < ActiveModel::Serializer
  attributes %i[id name slug name_with_type path path_with_type]
end
