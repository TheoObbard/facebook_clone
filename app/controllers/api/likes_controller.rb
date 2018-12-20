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