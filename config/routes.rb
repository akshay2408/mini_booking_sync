Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
  resources :bookings
  resources :rentals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # mount_ember_app :frontend, to: "/"
end
