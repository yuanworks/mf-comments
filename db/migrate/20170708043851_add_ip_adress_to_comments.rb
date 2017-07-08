class AddIpAdressToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :ip_address, :string, :limit => 64
  end
end
