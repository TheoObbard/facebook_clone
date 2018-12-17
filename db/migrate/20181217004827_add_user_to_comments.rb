class AddUserToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :poster_id, :integer, null: false
  end
end
