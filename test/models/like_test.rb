# == Schema Information
#
# Table name: likes
#
#  id          :bigint(8)        not null, primary key
#  object_id   :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  object_type :string
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end