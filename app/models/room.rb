class Room < ApplicationRecord
    belongs_to :user
    has_many :members

    validates :room_name, presence: true
end
