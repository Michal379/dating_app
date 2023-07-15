class CreateNames < ActiveRecord::Migration[7.0]
  def change
    create_table :names do |t|
      t.string :email
      t.string :password
      t.integer :age
      t.string :location
      t.text :bio
      t.string :profile_picture
      t.string :preferences

      t.timestamps
    end
  end
end
