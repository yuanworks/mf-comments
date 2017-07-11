class ApplicationController < ActionController::Base
  #removed so that anyone can send a request
  #protect_from_forgery with: :exception
  def fix_url (url)
    unless url.start_with?('http://') || url.start_with?('https://')
      return "http://#{url}"
  else
      return url
    end
  end
  helper_method :fix_url

end
