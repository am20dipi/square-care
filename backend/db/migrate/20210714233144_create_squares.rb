class CreateSquares < ActiveRecord::Migration[6.1]
  def change
    create_table :squares do |t|
      t.string :color
      t.integer :height
      t.integer :width
      t.belongs_to :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
