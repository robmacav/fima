class ExpenseCategoriesController < ApplicationController
  before_action :set_expense_category, only: %i[ show update destroy ]

  def index
    @expense_categories = ExpenseCategory.all

    render json: @expense_categories
  end

  def show
    render json: @expense_category
  end

  def create
    @expense_category = ExpenseCategory.new(expense_category_params)

    if @expense_category.save
      render json: @expense_category, status: :created, location: @expense_category
    else
      render json: @expense_category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @expense_category.update(expense_category_params)
      render json: @expense_category
    else
      render json: @expense_category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @expense_category.destroy!
  end

  private
    def set_expense_category
      @expense_category = ExpenseCategory.find(params.expect(:id))
    end

    def expense_category_params
      params.expect(expense_category: [ :description, :color, :user_id ])
    end
end
