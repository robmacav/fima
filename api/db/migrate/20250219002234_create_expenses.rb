class CreateExpenses < ActiveRecord::Migration[8.0]
  def change
    create_table :expenses do |t|
      t.string :title, null: false
      t.text :description
      t.decimal :value, null: false
      t.string :date, limit: 8, null: false
      t.references :payment_method, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
