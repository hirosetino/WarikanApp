class MembersController < ApplicationController
    def create
        room = Room.find(params[:room_id])
        @member = room.members.build(member_params)
        if @member.save
            redirect_to room_path(room.id)
        end
    end

    def update
        room = Room.find(params[:room_id])
        @member = Member.find(params[:id])
        @member.update(member_params)
        redirect_to room_path(room.id)
    end

    def member_count
        member_count = Member.count
        render json: { member_count: member_count }
    end

    private

    def member_params
        params.permit(:name, :fraction)
    end
end
