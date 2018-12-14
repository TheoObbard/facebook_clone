# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint(8)        not null, primary key
#  requestee_id :integer          not null
#  requester_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FriendRequest < ApplicationRecord

  validates :requestee_id, :requester_id, presence :true

  belongs_to :requester, 
    foreign_key: :requester_id, 
    class_name: :User

  belongs_to :requestee, 
    foreign_key: :requestee_id, 
    class_name: :User

end
