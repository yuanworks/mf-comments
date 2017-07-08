Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'articles#index'

  resources :articles do
    resources :comments
  end
  
  get '/articles/c/:codename', to: 'articles#show'

  resources :comments do
    resources :comments
  end
  
  devise_for :admins, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }

end
