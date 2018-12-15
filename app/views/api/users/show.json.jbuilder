json.partial!  "api/users/user", user: @user
json.set! 'friend_requests' do 
  json.partial!  "api/friend/request", user: @user
end 
