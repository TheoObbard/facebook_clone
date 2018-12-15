class Api::FriendRequestsController < ApplicationController 

  def create 
    @friendReq = FriendRequest.new(request_params)
    @user = current_user
    if @friendReq.save 
      render "api/users/show"
    else
      render json: ['User does not exist'], status: 404
    end 
  end   

  def destroy 
    @friendReq = FriendRequest.find(params[:id])
    @user = current_user
    @friendReq.delete
    render "api/users/show"
  end 

  private 

  def request_params 
    params.require(:friend_request).permit(:requestee_id, :requester_id)
  end 

end 