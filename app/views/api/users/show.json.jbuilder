json.partial!  "api/users/user", user: @user
json.set! 'friendRequests' do 
  json.partial!  "api/friend/request", user: @user
end 
json.set! 'friendships' do 
  json.partial!  "api/friend/friendship", user: @user
end 
