# frozen_string_literal: true

class City < ApplicationRecord
  # relationships
  has_many :districts
end
