# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_03_12_001502) do
  create_table "cards", force: :cascade do |t|
    t.string "description", null: false
    t.integer "limit", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_cards_on_user_id"
  end

  create_table "expense_categories", force: :cascade do |t|
    t.string "description", null: false
    t.string "color", limit: 6, null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_expense_categories_on_user_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.decimal "value", null: false
    t.string "date", limit: 8, null: false
    t.integer "status", null: false
    t.string "group_id", limit: 36
    t.integer "expense_category_id", null: false
    t.integer "card_id"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_expenses_on_card_id"
    t.index ["expense_category_id"], name: "index_expenses_on_expense_category_id"
    t.index ["user_id"], name: "index_expenses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cards", "users"
  add_foreign_key "expense_categories", "users"
  add_foreign_key "expenses", "cards"
  add_foreign_key "expenses", "expense_categories"
  add_foreign_key "expenses", "users"
end
