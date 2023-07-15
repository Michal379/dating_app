class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :status
      t.float :match_score
      t.datetime :matched_at

      t.timestamps
    end
  end
end
