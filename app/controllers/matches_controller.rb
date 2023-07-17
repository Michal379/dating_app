class MatchesController < ApplicationController
  before_action :authenticate_admin, except: [:index, :show]

  def index
    matches = Match.all
    render json: matches.to_json(except: [:created_at, :updated_at])
  end

  def show
    match = find_match
    render json: match.to_json(except: [:created_at, :updated_at])
  end

  def create
    match = Match.new(match_params)
    if match.save
      render json: match.to_json(except: [:created_at, :updated_at]), status: :created
    else
      render json: { error: "Failed to create match" }, status: :unprocessable_entity
    end
  end

  def update
    match = find_match
    if match.update(match_params)
      render json: match.to_json(except: [:created_at, :updated_at])
    else
      render json: { error: "Failed to update match" }, status: :unprocessable_entity
    end
  end

  def destroy
    match = find_match
    match.rooms.destroy_all # Destroy associated rooms before destroying the match
    if match.destroy
      head :no_content
    else
      render json: { error: "Failed to delete match" }, status: :unprocessable_entity
    end
  end

  private

  def authenticate_admin
    unless current_user&.admin?
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def find_match
    Match.find_by(id: params[:id])
  end

  def match_params
    params.require(:match).permit(:user_id, :status, :match_score, :matched_at)
  end
end
