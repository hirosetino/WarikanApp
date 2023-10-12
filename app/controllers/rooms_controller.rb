class RoomsController < ApplicationController
    def index
    end

    def create
        @room = Room.new(room_params)
        if @room.save
            redirect_to root_path
        end
    end
    
    private

    def room_params
        params.require(:room).permit(:room_name).merge(user_id: current_user.id)
    end
end
