class Expense < ApplicationRecord
  belongs_to :expense_category, class_name: "ExpenseCategory"
  belongs_to :card, optional: true
  belongs_to :user

  validates :title, presence: true
  validates :value, presence: true
  validates :date, presence: true 
  validates :status, presence: true

  enum :status, { "Não Pago": 0, "Pago": 1 }
end
