class Booking < ApplicationRecord
  belongs_to :rental

  validates_presence_of :rental_id, :start_at, :end_at, :client_email, :price 

  validate :start_at_date_cannot_be_in_the_past,
    :end_at_date_cannot_be_lesser_than_start_at, :booking_overlaps


  before_validation :calculate_price, on: [:create, :update]  

  scope :overlaps, ->(start_date, end_date, rental) do
    where "((start_at <= ?) and (end_at >= ?) and (rental_id = ?))", end_date, start_date, rental
  end

  def start_at_date_cannot_be_in_the_past
    if start_at.present? && start_at < Date.today
      errors.add(:start_at, "can't be in the past")
    end
  end

  def end_at_date_cannot_be_lesser_than_start_at
    if start_at.present? && end_at.present? && end_at < start_at
      errors.add(:end_at, "can't be lesser than start")
    end
  end

  def as_json(options={})
    super(include: {rental: {only: [:id, :name, :daily_rate] }})
  end

  def booking_overlaps
    bookings = self.class.overlaps(start_at,end_at,rental_id)
    if bookings.any?
      unless bookings.all.collect{ |b| b.id }.include? self.id
        errors.add(:start_at, "overlaps with other bookings.")
      end
    end  
  end
    
  def calculate_price
    self.price = (end_at.to_date - start_at.to_date).to_i * rental.daily_rate unless rental.blank?
  end  
end
