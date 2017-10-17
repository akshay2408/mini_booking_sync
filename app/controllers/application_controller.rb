class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  
  private

  def require_authenticate!
    return true if authenticate_token?
    json_response({ message: "Unauthorized" }, :unauthorized)
  end

  def authenticate_token?
    request.headers["AUTHENTICATION"].to_s.eql? "8ad2594413184072b9eb2eef519fa70c"
  end
end
