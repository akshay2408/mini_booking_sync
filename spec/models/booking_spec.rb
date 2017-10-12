require 'rails_helper'

RSpec.describe Booking, type: :model do

  it { should belong_to(:rental) }

  it { should validate_presence_of(:start_at) }
  it { should validate_presence_of(:end_at) }
  it { should validate_presence_of(:client_email) }
  it { should validate_presence_of(:price) }
  it { should validate_presence_of(:rental_id) }

  context "custom validation start_at date cannot be in the past" do
    let!(:rental) { create(:rental) }
    let(:valid_booking) { build(:booking, rental_id: rental.id) }
    let(:invalid_booking) { build(:booking, start_at: (Date.today - 2.day), end_at: Date.today, rental_id: rental.id) }
    it { expect(valid_booking.valid?).to be_truthy }
    it { expect(invalid_booking.valid?).to be_falsey }
  end

  context "custom validation end_at date cannot be lesser than start_at" do
    let!(:rental) { create(:rental) }
    let(:valid_booking) { build(:booking, rental_id: rental.id) }
    let(:invalid_booking) { build(:booking, start_at: (Date.today + 4.day), end_at: (Date.today + 2.day), rental_id: rental.id) }
    it { expect(valid_booking.valid?).to be_truthy }
    it { expect(invalid_booking.valid?).to be_falsey }
  end

  context "custom validation booking overlaps with other" do
    let!(:rental) { create(:rental) }
    let(:old_booking) { create(:booking, start_at: (Date.today-2), end_at:(Date.today+2), rental_id: rental.id) }
    let(:valid_booking) { build(:booking, start_at: (Date.today+3), end_at:(Date.today+4), rental_id: rental.id) }
    let(:invalid_booking) { build(:booking, start_at: (Date.today-1), end_at:(Date.today+1), rental_id: rental.id) }
    it { expect(valid_booking.valid?).to be_truthy }
    it { expect(invalid_booking.valid?).to be_falsey }
  end

end
