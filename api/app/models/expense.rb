class Expense < ApplicationRecord
  belongs_to :status, class_name: 'ExpenseStatus'
  belongs_to :category, class_name: 'ExpenseCategory'
  belongs_to :payment_method, class_name: 'ExpensePaymentMethod'

  validates_presence_of :title, :description, :value, :date

  default_scope { includes(:payment_method, :category, :status) }
end
