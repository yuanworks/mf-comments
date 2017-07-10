# MF-Comments Configuration Options
# NOTE: Changing this values requires restarting the rails s !
# MyApp::Application.config.x.<KEY_NAME> = <VALUE_NAME>
MfComments::Application.config.x.show_comment_date = false
# Same as:
# Rails.application.config.x.show_comment_date = false

# The following emails cannot be used to comment unless an Admin is logged in:
MfComments::Application.config.x.disallowed_emails = ["yuanhao.ark@gmail.com", "yuan@mindfulflexibility.com"]
