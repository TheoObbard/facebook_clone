user.one_friendships.each do |friend|
  json.set! friend.id do 
    json.extract! friend, :id, :user_one_id, :user_two_id
  end 
end 
user.two_friendships.each do |friend|
  json.set! friend.id do 
    json.extract! friend, :id, :user_one_id, :user_two_id
  end 
end 