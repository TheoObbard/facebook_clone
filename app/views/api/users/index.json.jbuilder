@potential_users.each do |user| 
  json.set! user.id do 
    json.extract! user, :id, :name
    json.profilePicUrl url_for(user.profile_picture)
  end
end 