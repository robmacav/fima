class CreateIncomes < ActiveRecord::Migration[8.0]
  def change
    create_table :incomes do |t|
      t.string :title, null: false
      t.string :description
      t.decimal :value, null: false
      t.string :date, limit: 8, null: false

      t.timestamps
    end
  end
end
