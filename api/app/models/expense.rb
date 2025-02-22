class Expense < ApplicationRecord
  belongs_to :status, class_name: 'ExpenseStatus', foreign_key: 'expense_status_id', optional: true
  belongs_to :category, class_name: 'ExpenseCategory', foreign_key: 'expense_category_id', optional: true
  belongs_to :payment_method, class_name: 'ExpensePaymentMethod', foreign_key: 'expense_payment_method_id', optional: true

  validates_presence_of :title, :value, :date

  default_scope { includes(:payment_method, :category, :status) }
end
