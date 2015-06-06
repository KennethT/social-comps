class WelcomeController < ApplicationController

  def index
    if params[:search_term1].present?
      @tweet1 = $twitter.search("#{params[:search_term1]}", result_type: "recent", lang: "en", geo_enabled: "true").take(30)

      @geo1 = @tweet1.map do |tweet|
        [tweet.geo.lat, tweet.geo.long].flatten
      end.reject {|array| array == [] || array == [0.0, 0.0] }

      # creating an value of a JSON to be sent to bluemix watson api / microservice
      @watson1 = @tweet1.map do |tweet|
        tweet.text
      end.join(', ')
      # watson_send1 is formatted for the watson api end point
      @watson_send1 = {"words": @watson1}.to_json

      conn = Faraday.new(:url => 'http://socialcompnodered.mybluemix.net')
      # post request to watson api
      response1 = conn.post do |req|
        req.url '/personality'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send1
      end

      @watson_data1 = JSON.parse(response1.body)

    end

    if params[:search_term2].present?
      @tweet2 = $twitter.search("#{params[:search_term2]}", result_type: "recent", lang: "en", geo_enabled: "true").take(30)


      @geo2 = @tweet2.map do |tweet|
        [tweet.geo.lat, tweet.geo.long].flatten
      end.reject {|array| array == [] || array == [0.0, 0.0] }

      # creating an value of a JSON to be sent to bluemix watson api / microservice
      @watson2 = @tweet2.map do |tweet|
        tweet.text
      end.join(', ')
      # watson_send2 is formatted for the watson api end point
      @watson_send2 = {"words": @watson2}.to_json
      # post request to watson api
      response2 = conn.post do |req|
        req.url '/personality'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send2
      end

      @watson_data2 = JSON.parse(response2.body)



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
