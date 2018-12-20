class Api::LikesController < ApplicationController 

  def create 
    @like = Like.new(like_params)
    @like.user_id = current_user.id 
    if @like.save    
      render "api/likes/show"
      return
    else          
      render json: ['Can\'t like this item'], status: 418
    end 
  end    

  def index 
    if params.include?(:post_id)
      post = Post.find(params[:post_id])
      @likes = post.likes
    elsif params.include?(:comment_id) 
      comment = Comment.find(params[:comment_id])
      @likes = comment.likes
    end
    unless @likes.nil?
      render "api/likes/index"
    end 
  end 

  def destroy
    @like = Like.find(params[:id])
    @like.delete 
    render "api/likes/show"
  end    

  private 

  def like_params 
    params.require(:likes).permit(:object_id, :object_type)
  end 

end 