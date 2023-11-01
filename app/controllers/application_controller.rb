class ApplicationController < ActionController::Base
    before_action :set_locale
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?

    def set_locale
        I18n.locale = session[:locale] || I18n.default_locale
    end

    def change_locale
        session[:locale] = params[:locale]
        redirect_back(fallback_location: root_path)
    end

    private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
    end
end
