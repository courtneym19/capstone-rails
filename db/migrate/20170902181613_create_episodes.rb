class CreateEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|
      t.string :title
      t.string :number
      t.date :date
      t.text :description

      t.timestamps
    end
  end
end
