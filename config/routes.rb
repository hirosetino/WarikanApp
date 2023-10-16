Rails.application.routes.draw do
    devise_for :users
    root 'rooms#index'
    resources :rooms, only: [:create, :show] do
        resources :members, only: [:create]
    end
end
