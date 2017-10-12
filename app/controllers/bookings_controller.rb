class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :update, :destroy]

  # GET /bookings
  def index
    @bookings = Booking.all

    json_response(@bookings)
  end

  # GET /bookings/1
  def show
    json_response(@booking)
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      json_response(@booking, :created, @booking)
    else
      json_response(@booking.errors, :unprocessable_entity)
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      head :no_content
    else
      json_response(@booking.errors, :unprocessable_entity)
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def booking_params
      params.require(:booking).permit(:start_at, :end_at, :client_email, :price, :rental_id)
    end
end
