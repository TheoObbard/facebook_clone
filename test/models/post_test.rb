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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
