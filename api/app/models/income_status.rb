class IncomeStatus < ApplicationRecord
    has_many :incomes
    
    validates_presence_of :description
end