Rails.application.routes.draw do
  resources :cards
  resources :expense_categories, path: 'expense-categories'

  get "up" => "rails/health#show", as: :rails_health_check
end
