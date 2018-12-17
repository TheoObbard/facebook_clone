class Api::CommentsController < ApplicationController 

  def create 
    @comment = Comment.new(comment_params)
    @comment.post_id = params[:post_id]
    if @comment.save 
      render "api/comments/show"
    else        
      render json: ['Invalid Comment'], status: 420
    end        
  end    

  def index   
    @comments = Post.find(params[:post_id]).comments
    render "api/comments/index"
  end    

  private 

  def comment_params 
    params.require(:comment).permit(:body, :poster_id)
  end 

end 