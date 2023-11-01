Rails.application.routes.draw do
    devise_for :users
    root 'rooms#index'
    resources :rooms, only: [:create, :show, :destroy] do
        resources :members, only: [:create, :update, :destroy]
    end
    get '/members/count', to: 'members#member_count'
    get 'change_locale/:locale', to: 'application#change_locale', as: 'change_locale'
end
