class Comment < ApplicationRecord
  belongs_to :discussion, polymorphic: true
  has_many :comments, as: :discussion, dependent: :destroy
  validates :author, :email, :body, presence: true
  #validates_format_of :email, :with => Devise::email_regexp
end
