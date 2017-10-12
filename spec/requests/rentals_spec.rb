require 'rails_helper'

RSpec.describe "Rentals", type: :request do
  describe "GET /rentals" do
    let(:headers) { {"AUTHENTICATION": "8ad2594413184072b9eb2eef519fa70c"} }

    it "works! (now write some real specs)" do
      get rentals_path, headers: headers
      expect(response).to have_http_status(200)
    end
  end
end
