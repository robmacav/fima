class CreateCards < ActiveRecord::Migration[8.0]
  def change
    create_table :cards do |t|
      t.string :description, null: false
      t.integer :limit, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
