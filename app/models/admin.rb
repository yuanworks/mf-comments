class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, # removed so noone can register=># :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
