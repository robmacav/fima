class CreateIncomes < ActiveRecord::Migration[8.0]
  def change
    create_table :income_statuses do |t|
      t.string :description, null: false
    end

    create_table :incomes do |t|
      t.string :title, null: false
      t.string :description
      t.decimal :value, null: false
      t.string :date, limit: 8, null: false
      t.references :income_status, null: false, foreign_key: true

      t.timestamps
    end
  end
end
