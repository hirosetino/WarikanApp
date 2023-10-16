class MembersController < ApplicationController
    def create
        @member = Member.new(member_params)
        if @member.save
            redirect_to room_path(room.id)
        end
    end

    private

    def member_params
        params.permit(:name).merge(room_id: room.id)
    end
end
