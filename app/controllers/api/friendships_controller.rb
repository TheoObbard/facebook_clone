class Api::FriendshipsController < ApplicationController 

  def create 
    @friendship = Friendship.new(friend_params)
    @user = current_user
    if @friendship.save
      render "api/users/show"
    else 
      render json: ['Can\'t friend this user'], status: 404
    end 
  end    

  def destroy 
    @friendship = Friendship.find(params[:id])
    @user = current_user
    @friendship.delete 
    render "api/users/show"
  end    

  private 

  def friend_params 
    params.require(:friendship).permit(:user_one_id, :user_two_id)
  end 

end 