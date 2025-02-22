Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  resources :expenses
  resources :categories

  get 'expense-status', to: 'expense_status#index'
  get 'expense-payment-methods', to: 'expense_payment_methods#index'
end
