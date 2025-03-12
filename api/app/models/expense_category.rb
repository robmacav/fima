class ExpenseCategory < ApplicationRecord
  belongs_to :user

  validates :description, presence: true
  validates :color, presence: true
end
