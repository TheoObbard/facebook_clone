class AddUserData < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthday, :datetime
    add_column :users, :gender, :string
    add_column :users, :job, :string
    add_column :users, :relationship_stat, :string
    add_column :users, :location, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
