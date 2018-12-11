class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, :unique => true
      t.string :session_token, null: false, :unique =>  true
      t.string :name, null: false 
      t.string :password_digest, null: false

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
    add_index :users, :name
  end
end
