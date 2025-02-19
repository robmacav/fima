class Expense < ApplicationRecord
  belongs_to :category
  belongs_to :payment_method

  validates_presence_of :title, :description, :value, :date

  default_scope { includes(:payment_method, :category) }
end
