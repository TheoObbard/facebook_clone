Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index] do #index is for search bar functionality
      resources :friend_requests, only: [:index]
      resources :friendships, only: [:index]
      resources :posts, only: [:create, :index] #this is for posting on someones wall
      resources :likes, only: [:create, :destroy]
    end
    resources :posts, only: [:index] do #this is for the newsfeed posts
      resources :comments, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy] 
    resources :friend_requests, only: [:create, :destroy]
  end
end
