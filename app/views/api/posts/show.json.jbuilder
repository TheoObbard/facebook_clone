json.posts do 
  json.set! @post.id do 
    json.extract! @post, :body, :poster_id, :postee_id, :id, :created_at
  end 
end 