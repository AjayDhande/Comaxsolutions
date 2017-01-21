class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.attachment :image
      t.string :created_by
      t.string :category
      t.text :body

      t.timestamps null: false
    end
  end
end
