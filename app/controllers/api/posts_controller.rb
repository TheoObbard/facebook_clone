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
    if params[:user_id] 
      @posts = User.find(params[:user_id]).received_posts
      render "api/posts/index"
    else 
      @posts = []
      @friends = [current_user]
      @friendships = current_user.one_friends
      @friendships.concat(current_user.two_friends)
      @friendships.each do |friendship|
        if friendship.user_one_id == current_user.id 
          @friends << User.find(friendship.user_two_id)
        else
          @friends << User.find(friendship.user_one_id)
        end
      end
      @friends.each do |friend| 
        @posts.concat(friend.received_posts)
      end 
      render "api/posts/index"
    end 
  end 

  private 

  def post_params 
    params.require(:post).permit(:poster_id, :body)
  end 
end 