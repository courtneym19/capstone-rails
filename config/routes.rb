Rails.application.routes.draw do

  get 'index' => 'dashboard#index'

  get 'seek_bar' => 'dashboard#seek_bar'

  root 'dashboard#home'

end
