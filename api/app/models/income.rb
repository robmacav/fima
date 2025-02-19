class Income < ApplicationRecord
    validates_presence_of :title, :value, :date
end
