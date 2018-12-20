# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  post_id           :integer          not null
#  parent_comment_id :integer
#  body              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  poster_id         :integer          not null
#

class Comment < ApplicationRecord

validates :body, presence: true

  belongs_to :post, 
    foreign_key: :post_id, 
    class_name: :Post

  belongs_to :poster, 
    foreign_key: :poster_id, 
    class_name: :User

  has_many :likes, as: :object


end
