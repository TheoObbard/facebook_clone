class ApplicationController < ActionController::Base

  helper_method :current_user, :signed_in?

  def current_user 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end  

  def login(user) 
    session[:session_token] = user.reset_session_token
    @current_user = user
  end    

  def logout 
    @current_user.reset_session_token
    session[:session_token] = nil
  end   

  def signed_in?
    !!current_user
  end 

end
