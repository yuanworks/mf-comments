class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :author
      t.string :email
      t.string :url
      t.text :body
      t.integer :discussion_id
      t.string :discussion_type

      t.timestamps
    end
  end
end
