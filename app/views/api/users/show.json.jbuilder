json.user do 
  json.partial!  "api/users/user", user: @user
end
json.friendRequests do 
  json.partial!  "api/friend/request", user: @user
end 
json.friendships do 
  json.partial!  "api/friend/friendship", user: @user
end 