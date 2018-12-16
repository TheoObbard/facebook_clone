class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :poster_id, null: false
      t.integer :postee_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :posts, :poster_id
    add_index :posts, :postee_id
  end
end
