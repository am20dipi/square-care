class AddUserIdToSquares < ActiveRecord::Migration[6.1]
  def change
    add_column :squares, :user_id, :integer, foreign_key: true
  end
end
