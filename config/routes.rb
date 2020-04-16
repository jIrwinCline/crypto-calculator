Rails.application.routes.draw do
  # resources :currencies
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
end
