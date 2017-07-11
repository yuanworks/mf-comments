# MF-Comments

Wordpress-like Comments on Ruby/Rails and vanilla Javascript.

## Creating an Admin

Admin creation is disabled for security reasons.To create an admin, you will need to use the Rails console:

```
> rails c

admin = Admin.create! do |u|
  u.email = 'sample@sample.com'
  u.password = 'password'
  u.password_confirmation = 'password'
end
```

Additionally, you can enable the routing option for creating new admin users on the admin.rb model.

## TO DO

* Akismet for comment filtering

* Akismet ADMIN Section

* Scroll to the comment box when pressing "Reply"

* Deploy to test apache server on c.mf.com

* Styling for ADMIN fields

* Required parameters for activerecord model and database

* Keep comment count