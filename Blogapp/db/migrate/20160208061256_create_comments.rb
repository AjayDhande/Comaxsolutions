class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :user_name
      t.string :email
      t.string :website
      t.text :message
      t.boolean :approved
      t.references :blog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
