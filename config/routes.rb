# frozen_string_literal: true

Rails.application.routes.draw do
  post '/graphql', to: 'graphql#execute'

  namespace :v1 do
    post '/authenticate', to: 'authentication#authenticate'
    get '/profile', to: 'user#profile'
    post '/forgot_password', to: 'password#forgot'
    post '/reset_password', to: 'password#reset'
    resources :user, only: [:create]
    resources :city, only: %i[index show]
    resources :department, only: %i[index]
  end
end
