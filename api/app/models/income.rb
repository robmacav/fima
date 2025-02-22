class Income < ApplicationRecord
    belongs_to :status, class_name: 'IncomeStatus', foreign_key: 'income_status_id', optional: true

    validates_presence_of :title, :value, :date
end
