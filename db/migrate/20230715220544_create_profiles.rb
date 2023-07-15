class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.text :about_me
      t.text :interests
      t.string :occupation
      t.string :education
      t.decimal :height
      t.string :body_type
      t.string :religion
      t.boolean :smoking
      t.boolean :drinking

      t.timestamps
    end
  end
end
