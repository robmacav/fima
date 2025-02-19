class IncomesController < ApplicationController
  before_action :set_income, only: %i[ show update destroy ]

  # GET /incomes
  def index
    @incomes = Income.all

    render json: @incomes
  end

  # GET /incomes/1
  def show
    render json: @income
  end

  # POST /incomes
  def create
    @income = Income.new(income_params)

    if @income.save
      render json: @income, status: :created, location: @income
    else
      render json: @income.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /incomes/1
  def update
    if @income.update(income_params)
      render json: @income
    else
      render json: @income.errors, status: :unprocessable_entity
    end
  end

  # DELETE /incomes/1
  def destroy
    @income.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income
      @income = Income.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def income_params
      params.expect(income: [ :title, :description, :value, :date ])
    end
end
