json.extract! user, :id, :email, :name, :birthday, :gender, :job, :relationship_stat, :location
if user.photo.attached? 
  json.photoUrl url_for(user.photo)
end
