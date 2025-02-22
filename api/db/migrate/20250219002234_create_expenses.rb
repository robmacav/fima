class CreateExpenses < ActiveRecord::Migration[8.0]
  def change
    create_table :expense_categories do |t|
      t.string :description, null: false
      t.string :color, limit: 6, null: false
    end

    create_table :expense_payment_methods do |t|
      t.string :description, null: false
    end

    create_table :expense_statuses do |t|
      t.string :description, null: false
    end

    create_table :expenses do |t|
      t.string :title, null: false
      t.text :description
      t.decimal :value, null: false
      t.string :date, limit: 8, null: false
      t.references :expense_payment_method, null: false, foreign_key: true
      t.references :expense_status, null: false, foreign_key: true
      t.references :expense_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
