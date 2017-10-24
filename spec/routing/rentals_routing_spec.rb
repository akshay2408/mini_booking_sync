require "rails_helper"

RSpec.describe RentalsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/rentals").to route_to(ember_app: :frontend, controller: "ember_cli/ember", action: "index", rest: "rentals")
    end


    it "routes to #show" do
      expect(:get => "/rentals/1").to route_to(ember_app: :frontend, controller: "ember_cli/ember", action: "index", rest: "rentals/1")
    end


    it "routes to #create" do
      expect(:post => "/rentals").to route_to("rentals#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/rentals/1").to route_to("rentals#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/rentals/1").to route_to("rentals#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/rentals/1").to route_to("rentals#destroy", :id => "1")
    end

  end
end
