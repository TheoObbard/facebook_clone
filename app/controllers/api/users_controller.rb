class Api::UsersController < ApplicationController 

  def create 
    @user = User.new(user_params)
    @user.profile_picture.attach(io: File.open(File.join(Rails.root, 'app', 'assets', 'images', 'default_profile.jpg')), filename: 'default')

    if @user.save 
      login(@user)
      render "api/users/show"
    else  
      render json: @user.errors.full_messages, status: 422
    end 
  end  
  
  def show 
    @user = User.find(params[:id])
    if @user 
      render "api/users/show"
    else 
      render json: ['User does not exist'], status: 404
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else  
      render json: ['Invalid upload type'], status: 420
    end 
  end 

  private 

  def user_params 
    params.require(:user).permit(:email, :password, :name, :cover_photo, :profile_picture)
  end

end 