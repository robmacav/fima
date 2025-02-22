class ExpensePaymentMethodsController < ApplicationController
    # GET /expense-payment-methods
    def index
      @payment_methods = ExpensePaymentMethod.all
  
      render json: @payment_methods
    end
end