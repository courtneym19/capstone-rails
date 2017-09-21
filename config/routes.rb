Rails.application.routes.draw do

  get 'index' => 'dashboard#index'

  root 'dashboard#home'

end
