class CreateExpenses < ActiveRecord::Migration[8.0]
  def change
    create_table :expenses do |t|
      t.string :title, null: false
      t.text :description
      t.decimal :value, null: false
      t.string :date, limit: 8, null: false
      t.integer :status, null: false
      t.string :group_id, limit: 36
      t.references :expense_category, null: false, foreign_key: true
      t.references :card, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
