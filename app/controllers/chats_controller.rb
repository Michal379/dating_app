class ChatsController < ApplicationController
  def index
    chats = Chat.all
    render json: chats.to_json(except: [:created_at, :updated_at])
  end

  def show
    chat = find_chat
    render json: chat.to_json(except: [:created_at, :updated_at])
  end

  def create
    chat = Chat.new(chat_params)
    if chat.save
      render json: chat.to_json(except: [:created_at, :updated_at]), status: :created
    else
      render json: { error: "Failed to create chat" }, status: :unprocessable_entity
    end
  end

  def update
    chat = find_chat
    if chat.update(chat_params)
      render json: chat.to_json(except: [:created_at, :updated_at])
    else
      render json: { error: "Failed to update chat" }, status: :unprocessable_entity
    end
  end

  def destroy
    chat = find_chat
    chat.destroy
    head :no_content
  end

  private

  def find_chat
    Chat.find_by(id: params[:id])
  end

  def chat_params
    params.require(:chat).permit(:user_id, :message, :read, :sent_at)
  end
end
