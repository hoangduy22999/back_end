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
  has_many :user_departments
  has_many :department, through: :user_departments

  # nested attributes
  accepts_nested_attributes_for :user_departments

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

  def generate_password_token!
    self.reset_password_token = generate_token
    self.reset_password_sent_at = Time.now.utc
    save!
  end

  def password_token_valid?
    (reset_password_sent_at + 4.hours) > Time.now.utc
  end

  def reset_password!(password, password_confirmation)
    self.reset_password_token = nil
    self.password = password
    self.password_confirmation = password_confirmation
    save!
  end

  # class method
  class << self
    def random_password
      (('!'..'/').to_a.sample(1) + ('0'..'9').to_a.sample(2) + ('a'..'z').to_a.sample(8)).join
    end
  end

  private

  def generate_token
    SecureRandom.hex(10)
  end
end
