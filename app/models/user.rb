class User < ApplicationRecord
    has_secure_password
    has_many :matches
    has_many :chats
end
