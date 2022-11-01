class UserSerializer < ActiveModel::Serializer
  attributes %i[id first_name last_name email birthday user_type gender district_id phone role]
end
