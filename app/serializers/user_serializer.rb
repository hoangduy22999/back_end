# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes %i[id first_name last_name email birthday gender district_id phone role address avatar_url]

  def avatar_url
    object.avatar&.url
  end
end
