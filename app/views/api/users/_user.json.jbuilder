json.set! user.id do 
  json.extract! user, :id, :email, :name, :birthday, :gender, :job, :relationship_stat, :location
  if user.profile_picture.attached? 
    json.profilePicUrl url_for(user.profile_picture)
  end
  if user.cover_photo.attached? 
    json.coverPhotoUrl url_for(user.cover_photo)
  end
end