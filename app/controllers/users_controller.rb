class UsersController < ApplicationController
    def index
      users = User.all
      render json: users.to_json(except: [:password_digest, :created_at, :updated_at])
    end
  
    def show
      user = find_user
      render json: user.to_json(except: [:password_digest, :created_at, :updated_at])
    end
  
    def create
      user = User.new(user_params)
      if user.save
        render json: user.to_json(except: [:password_digest, :created_at, :updated_at]), status: :created
      else
        render json: { error: "Failed to create user" }, status: :unprocessable_entity
      end
    end
  
    def update
      user = find_user
      if user.update(user_params)
        render json: user.to_json(except: [:password_digest, :created_at, :updated_at])
      else
        render json: { error: "Failed to update user" }, status: :unprocessable_entity
      end
    end
  
    def destroy
      user = find_user
      user.destroy
      head :no_content
    end
  
    private
  
    def find_user
      User.find_by(id: params[:id])
    end
  
    def user_params
      params.require(:user).permit(:name, :email, :password, :age, :gender, :location, :bio, :profile_picture, :preferences, :activity)
    end
  end
  