class Comment < ApplicationRecord
  belongs_to :discussion, polymorphic: true
  has_many :comments, as: :discussion, dependent: :destroy
end
