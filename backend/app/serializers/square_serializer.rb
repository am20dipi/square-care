class SquareSerializer
  include FastJsonapi::ObjectSerializer
  attributes :color, :id, :height, :width, :user_id
  belongs_to :user
end
