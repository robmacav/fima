class Card < ApplicationRecord
  belongs_to :user, optional: true

  validates :description, presence: true
  validates :limit, presence: true
end
