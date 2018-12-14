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

require 'test_helper'

class FriendRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
