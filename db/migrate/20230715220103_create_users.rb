class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :age
      t.string :gender
      t.string :location
      t.text :bio
      t.string :profile_picture
      t.string :preferences
      t.string :activity

      t.timestamps
    end
  end
end
