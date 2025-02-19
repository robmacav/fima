class Category < ApplicationRecord
    validates_presence_of :description, :color
end
