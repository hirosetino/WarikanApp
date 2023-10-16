class RoomsController < ApplicationController
    def index
        user = current_user
        @rooms = user.rooms
    end

    def create
        @room = Room.new(room_params)
        if @room.save
            redirect_to root_path
        end
    end

    def show
        @room = Room.find(params[:id])
    end
    
    private

    def room_params
        params.permit(:room_name).merge(user_id: current_user.id)
    end
end
