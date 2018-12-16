class Api::PostsController < ApplicationController 

  def create 
    @post = Post.new(post_params)
    @post.postee_id = params[:user_id]
    if @post.save 
      render "api/posts/show"
    else  
      render json: ['Invalid Post'], status: 420
    end 
  end   

  def index 
    @posts = User.find(params[:user_id]).received_posts
    render "api/posts/index"
  end 

  private 

  def post_params 
    params.require(:post).permit(:poster_id, :body)
  end 
end 