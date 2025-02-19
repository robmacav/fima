class CreateCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :categories do |t|
      t.string :description, null: false
      t.string :color, limit: 6, null: false

      t.timestamps
    end
  end
end
