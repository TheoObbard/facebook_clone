# == Schema Information
#
# Table name: users
#
#  id                :bigint(8)        not null, primary key
#  email             :string           not null
#  session_token     :string           not null
#  name              :string           not null
#  password_digest   :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  birthday          :datetime
#  gender            :string
#  job               :string
#  relationship_stat :string
#  location          :string
#

class User < ApplicationRecord

  validates :email, :session_token, :name, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token 

  attr_reader :password

  def self.find_by_credentials(email, password) 
    @user = User.find_by(email: email)
    if @user && @user.valid_password?(password)
      @user 
    else 
      nil 
    end
  end  

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end    

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end    

  def reset_session_token 
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end 

  def ensure_session_token 
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end 

end
