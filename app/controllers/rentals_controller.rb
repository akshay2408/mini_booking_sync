class RentalsController < ApplicationController
  
  before_action :require_authenticate!
  before_action :set_rental, only: [:show, :update, :destroy]

  # GET /rentals
  def index
    @rentals = Rental.all

    json_response(@rentals)
  end

  # GET /rentals/1
  def show
    json_response(@rental)
  end

  # POST /rentals
  def create
    @rental = Rental.new(rental_params)

    if @rental.save
      json_response(@rental, :created, @rental)
    else
      json_response(@rental.errors, :unprocessable_entity)
    end
  end

  # PATCH/PUT /rentals/1
  def update
    if @rental.update(rental_params)
      head :no_content
    else
      json_response(@rental.errors, :unprocessable_entity)
    end
  end

  # DELETE /rentals/1
  def destroy
    @rental.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rental
      @rental = Rental.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def rental_params
      params.require(:rental).permit(:name, :daily_rate)
    end
end
