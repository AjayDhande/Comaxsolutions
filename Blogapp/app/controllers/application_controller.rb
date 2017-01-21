class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  skip_before_filter :verify_authenticity_token

  def verify_google_recaptcha(secret_key, response)
	  status = `curl "https://www.google.com/recaptcha/api/siteverify?secret=#{secret_key}&response=#{response}"`
	  logger.info "---------------status ==> #{status}"
	  hash = JSON.parse(status)
	  hash["success"] == true ? true : false
  end

end
