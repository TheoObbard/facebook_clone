json.user do 
  json.partial!  "api/users/user", user: @user
end
json.friendRequests do 
  json.partial!  "api/friend/request", user: @user
end 
json.friendships do 
  json.partial!  "api/friend/friendship", user: @user
end 

# EXPERIMENTAL

json.friends do 
  @user.two_friends.each do |friend| 
    json.partial!  "api/users/user", user: friend
  end
end

json.friends do 
  @user.one_friends.each do |friend| 
    json.partial!  "api/users/user", user: friend
  end
end