class ProfilesController < ApplicationController
    def index
      profiles = Profile.all
      render json: profiles.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      profile = find_profile
      render json: profile.to_json(except: [:created_at, :updated_at])
    end
  
    def create
      profile = Profile.new(profile_params)
      if profile.save
        render json: profile.to_json(except: [:created_at, :updated_at]), status: :created
      else
        render json: { error: "Failed to create profile" }, status: :unprocessable_entity
      end
    end
  
    def update
      profile = find_profile
      if profile.update(profile_params)
        render json: profile.to_json(except: [:created_at, :updated_at])
      else
        render json: { error: "Failed to update profile" }, status: :unprocessable_entity
      end
    end
  
    def destroy
      profile = find_profile
      profile.destroy
      head :no_content
    end
  
    private
  
    def find_profile
      Profile.find_by(id: params[:id])
    end
  
    def profile_params
      params.require(:profile).permit(:user_id, :about_me, :interests, :occupation, :education, :height, :body_type, :religion, :smoking, :drinking)
    end
  end
  