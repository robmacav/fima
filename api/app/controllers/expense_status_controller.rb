class ExpenseStatusController < ApplicationController
    # GET /expense-status
    def index
      @status = ExpenseStatus.all
  
      render json: @status
    end
end