# == Schema Information
#
# Table name: friendships
#
#  id          :bigint(8)        not null, primary key
#  user_one_id :integer          not null
#  user_two_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Friendship < ApplicationRecord

  validates :user_one_id, :user_two_id, presence: true

  belongs_to :user_one, 
    foreign_key: :user_one_id, 
    class_name: :User

  belongs_to :user_two, 
    foreign_key: :user_two_id, 
    class_name: :User

end
