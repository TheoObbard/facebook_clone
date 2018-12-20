# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  object_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  belongs_to :object, 
    foreign_key: :object_id, 
    polymorphic: true

  belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User

end
