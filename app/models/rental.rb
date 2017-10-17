class Rental < ApplicationRecord
  has_many :bookings, dependent: :destroy

  validates_presence_of :name
  validates_presence_of :daily_rate

  default_scope { order('updated_at desc') }
  
end

