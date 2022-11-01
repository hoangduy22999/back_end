# frozen_string_literal: true

Rails.application.routes.draw do
  post '/graphql', to: 'graphql#execute'
  post '/authenticate', to: 'authentication#authenticate'

  namespace :v1 do
    get '/profile', to: 'user#profile'
    resources :user, only: [:create]
  end
end
