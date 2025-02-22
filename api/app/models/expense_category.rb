class ExpenseCategory < ApplicationRecord
    validates_presence_of :description, :color
end
