class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user_one_id, null: false
      t.integer :user_two_id, null: false

      t.timestamps
    end
    add_index :friendships, :user_one_id
    add_index :friendships, :user_two_id
  end
end
