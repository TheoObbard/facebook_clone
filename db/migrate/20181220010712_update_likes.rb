class UpdateLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :object_type, :string
    add_index :likes, [:object_type, :object_id]
  end
end
