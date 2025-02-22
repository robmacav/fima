class ExpenseCategory < ApplicationRecord
  has_many :expenses

  validates_presence_of :description

  before_create :generate_random_attribute_color, if: :color_nil?

  private

  def generate_random_attribute_color
    self.color = SecureRandom.hex(3)
  end

  def color_nil?
      self.color.nil?
  end
end
