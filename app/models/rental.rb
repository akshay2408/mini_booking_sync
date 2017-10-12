class Rental < ApplicationRecord
  has_many :bookings, dependent: :destroy

  validates_presence_of :name
  validates_presence_of :daily_rate
end
