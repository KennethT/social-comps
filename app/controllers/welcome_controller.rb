class WelcomeController < ApplicationController

  def index
    if params[:search_term1].present?
      @tweet1 = $twitter.search("#{params[:search_term1]}", result_type: "recent", lang: "en", geo_enabled: "true").take(30)

      @geo1 = @tweet1.map do |tweet|
        [tweet.geo.lat, tweet.geo.long].flatten
      end.reject {|array| array == [] || array == [0.0, 0.0] }

      # creating an element to be sent to bluemix watson api
      @watson1 = @tweet1.map do |tweet|
        tweet.text
      end.join(', ').to_json

    end

    if params[:search_term2].present?
      @tweet2 = $twitter.search("#{params[:search_term2]}", result_type: "recent", lang: "en", geo_enabled: "true").take(30)


      @geo2 = @tweet2.map do |tweet|
        [tweet.geo.lat, tweet.geo.long].flatten
      end.reject {|array| array == [] || array == [0.0, 0.0] }

    end

    # This is the Sentiment Analysis portion

    # @tweet1.each do |tweet|
    #    @emotion = SadPanda.emotion(tweet.text.dup).capitalize
    #    Tweet.create(emotion: @emotion, text: tweet.text, screen_name: tweet.user.screen_name)
    #  end
    #
    #  @emotions = @tweet1.map do |tweet|
    #    SadPanda.emotion(tweet.text.dup).capitalize
    #  end.uniq
    #
    #  @emotions.delete_if {|i| i == "Ambiguous"}

  end


end
