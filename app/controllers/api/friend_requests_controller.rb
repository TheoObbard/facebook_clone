class Api::FriendRequestsController < ApplicationController 

  def create 
    @friendReq = FriendRequest.new(request_params)
    @friendReq.requester_id = current_user.id
    if @friendReq.save 
      render "api/users/show"
    else   
      render json: ['User does not exist'], status: 404
    end 
  end   

  def destroy 
    @friendReq = FriendRequest.find(requester_id: params[:requester_id], requestee_id: params[:requestee_id])
    @friendReq.delete
    render "api/users/show"
  end 

  private 

  def request_params 
    params.require(:friend_request).permit(:requestee_id, :requester_id)
  end 

end 