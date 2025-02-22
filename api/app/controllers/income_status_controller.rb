class IncomeStatusController < ApplicationController
    # GET /income-status
    def index
      @status = IncomeStatus.all
  
      render json: @status
    end
end