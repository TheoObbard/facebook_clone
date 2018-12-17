json.comments do 
  json.set! @comment.id do 
    json.extract! @comment, :body, :poster_id, :post_id, :id, :created_at
  end 
end 