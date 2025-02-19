class ExpensesController < ApplicationController
  before_action :set_expense, only: %i[ show update destroy ]

  # GET /expenses
  def index
    @expenses = Expense.all

    render json: @expenses
  end

  # GET /expenses/1
  def show
    render json: @expense
  end

  # POST /expenses
  def create
    @expense = Expense.new(expense_params)

    if @expense.save
      render json: @expense, status: :created, location: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /expenses/1
  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense.errors, status: :unprocessable_entity
    end
  end

  # DELETE /expenses/1
  def destroy
    @expense.destroy!
  end

  private
    def set_expense
      @expense = Expense.find(params.expect(:id))
    end

    def expense_params
      params.expect(expense: [ :title, :description, :value, :date, :payment_method_id, :category_id ])
    end
end
