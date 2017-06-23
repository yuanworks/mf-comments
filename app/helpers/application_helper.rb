module ApplicationHelper

  def gravatar_url(email, size)
    gravatar_id = if !email.nil? then Digest::MD5::hexdigest(email).downcase else "" end
    default_url = "https://mindfulflexibility.com/layout/mf_avatar.png" #image_url("mf_avatar.png")
    url = "http://gravatar.com/avatar/#{gravatar_id}.png?s=#{size}&d=#{CGI::escape(default_url)}"
  end
    
end
