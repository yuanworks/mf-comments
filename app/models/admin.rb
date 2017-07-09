class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, #don't allow registers# :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
