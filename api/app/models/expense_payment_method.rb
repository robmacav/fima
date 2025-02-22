class ExpensePaymentMethod < ApplicationRecord
    has_many :expenses
    
    validates_presence_of :description
end
