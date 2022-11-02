# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # validates
  validates :phone, length: { in: 10..13 }
  validates :password, format: { with: PASSWORD_FORMAT }, unless: -> { password.blank? }

  # relationships
  belongs_to :district

  # enums
  enum role: {
    guest: 0,
    user: 1,
    admin: 98
  }, _prefix: true

  enum gender: {
    male: 0,
    female: 1,
    other: 2
  }, _prefix: true

  # class method
  class << self
    def random_password
      (('!'..'/').to_a.sample(1) + ('0'..'9').to_a.sample(2) + ('a'..'z').to_a.sample(8)).join
    end
  end
end
