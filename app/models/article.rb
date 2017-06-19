class Article < ApplicationRecord
  has_many :comments, as: :discussion, dependent: :destroy
end
