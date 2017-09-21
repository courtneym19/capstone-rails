module Api
  respond_to :json

  class EpisodesController < ApplicationController
    def index
      respond_with Episode.all
    end
  end
end
