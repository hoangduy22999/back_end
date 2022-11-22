# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :v1 do
    post '/authenticate', to: 'authentication#authenticate'
    get '/profile', to: 'user#profile'
    put '/update_profile', to: 'user#update_profile'
    post '/forgot_password', to: 'password#forgot'
    post '/reset_password', to: 'password#reset'
    resources :user, only: %i[index create update]
    resources :city, only: %i[index show]
    resources :department, only: %i[index create update edit]
  end
end
