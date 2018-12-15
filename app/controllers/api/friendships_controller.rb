class Api::FriendshipsController < ApplicationController 

  def create 
    @user = current_user
    @existing_friendship = Friendship.find_by(user_one_id: params[:friendship][:user_one_id], user_two_id: params[:friendship][:user_two_id])
    if @existing_friendship.nil?
      @existing_friendship = Friendship.find_by(user_two_id: params[:friendship][:user_one_id], user_one_id: params[:friendship][:user_two_id])
    end 

    unless @existing_friendship.nil? 
      render "api/users/show"
      return 
    end

    @friendship = Friendship.new(friend_params)
    if @friendship.save
      remove_from_friend_requests
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

  def index 
    @user = User.find(params[:user_id])
    render "api/users/show"
  end

  private 

  def remove_from_friend_requests 
    friendReq = FriendRequest.find_by(requester_id: params[:friendship][:user_one_id], requestee_id: params[:friendship][:user_two_id])
    friendReq.delete unless friendReq.nil?

    friendReq = FriendRequest.find_by(requestee_id: params[:friendship][:user_one_id], requester_id: params[:friendship][:user_two_id])
    friendReq.delete unless friendReq.nil?
  end

  def friend_params 
    params.require(:friendship).permit(:user_one_id, :user_two_id)
  end 

end 