class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.text :message
      t.boolean :read
      t.datetime :sent_at

      t.timestamps
    end
  end
end
