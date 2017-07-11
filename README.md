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

## TO DO

* Akismet for comment filtering

* Akismet ADMIN Section

* Scroll to the comment box when pressing "Reply"

* Deploy to test apache server on c.mf.com

* Styling for ADMIN fields

* Required parameters for activerecord model and database

* Validate URL / always add HTTP

* Keep comment count