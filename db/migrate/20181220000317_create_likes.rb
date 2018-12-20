class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :object_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, :object_id
  end
end
