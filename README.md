# README

Welcome to MF Comments - Ruby.

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

* Only allow myself to use the name "Yuan" and email

* Admin login (auth?) - only allow one user creation

* Deploy to test apache server

* Styling for ADMIN fields

* Required parameters for activerecord model and database