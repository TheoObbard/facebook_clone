json.likes do 
  json.set! @like.id do 
    json.extract! @like, :user_id, :object_id, :id, :object_type
  end 
end 