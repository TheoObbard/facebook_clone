# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  poster_id  :integer          not null
#  postee_id  :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

  validates :body, presence: true

  belongs_to :poster, 
    foreign_key: :poster_id, 
    class_name: :User

  belongs_to :postee, 
    foreign_key: :postee_id, 
    class_name: :User

  has_many :comments, 
    foreign_key: :post_id, 
    class_name: :Comment

  has_many :likes, 
    as: :object, 
    class_name: :Like, 
    foreign_key: :object_id

end
