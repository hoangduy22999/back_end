# frozen_string_literal: true

class UserDepartment < ApplicationRecord
  # rollback function
  before_create :set_startdate

  # validates
  validates :end_date, date: { before_or_equal_to: :start_date }, unless: -> { end_date.blank? }

  # relationships
  belongs_to :user
  belongs_to :department

  # enums
  enum role: {
    member: 0,
    subleader: 1,
    leader: 2
  }, _prefix: true

  private

  def set_startdate
    self.start_date = Date.current
  end
end
