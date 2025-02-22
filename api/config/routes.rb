Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  
  resources :incomes
  resources :expenses
  resources :categories

  get 'income-status', to: 'income_status#index'
  get 'expense-status', to: 'expense_status#index'
  get 'expense-payment-methods', to: 'expense_payment_methods#index'
end
