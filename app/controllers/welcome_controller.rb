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
      @watson_send1 = {"words" => @watson1}.to_json

      conn = Faraday.new(:url => 'http://socialcompnodered.mybluemix.net')
      # post request to watson personality insights api
      response1 = conn.post do |req|
        req.url '/personality'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send1
      end

      @watson_data1 = JSON.parse(response1.body)

      # post request to bluemix sentiment api, this analyzes the sentiment of the first tweet query
      response_insights1 = conn.post do |req|
        req.url '/sentiment'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send1
      end

      @watson_sentiment1 = response_insights1.body

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
      @watson_send2 = {"words" => @watson2}.to_json
      # post request to watson  personality insights api
      response2 = conn.post do |req|
        req.url '/personality'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send2
      end

      @watson_data2 = JSON.parse(response2.body)

      # post request to bluemix sentiment api, this analyzes the sentiment of the first tweet query
      response_insights2 = conn.post do |req|
        req.url '/sentiment'
        req.headers['Content-Type'] = 'application/json'
        req.body = @watson_send2
      end

      @watson_sentiment2 = response_insights2.body



      # OCEAN for watson1 data
      @openness_name1 = @watson_data1["children"][0]["children"][0]["children"][0]["id"] * 100
      @openness_rating1 = @watson_data1["children"][0]["children"][0]["children"][0]["percentage"] * 100
      @conscientiousness_name1 = @watson_data1["children"][0]["children"][0]["children"][1]["id"] * 100
      @conscientiousness_rating1 = @watson_data1["children"][0]["children"][0]["children"][1]["percentage"] * 100
      @extraversion_name1 = @watson_data1["children"][0]["children"][0]["children"][2]["id"] * 100
      @extraversion_rating1 = @watson_data1["children"][0]["children"][0]["children"][2]["percentage"] * 100
      @agreeableness_name1 = @watson_data1["children"][0]["children"][0]["children"][3]["id"] * 100
      @agreeableness_rating1 = @watson_data1["children"][0]["children"][0]["children"][3]["percentage"] * 100
      @neuroticism_name1 = @watson_data1["children"][0]["children"][0]["children"][3]["id"] * 100
      @neuroticism_rating1 = @watson_data1["children"][0]["children"][0]["children"][3]["percentage"] * 100

      # OCEAN for watson2 data
      @openness_name2 = @watson_data2["children"][0]["children"][0]["children"][0]["id"] * 100
      @openness_rating2 = @watson_data2["children"][0]["children"][0]["children"][0]["percentage"] * 100
      @conscientiousness_name2 = @watson_data1["children"][0]["children"][0]["children"][1]["id"] * 100
      @conscientiousness_rating2 = @watson_data2["children"][0]["children"][0]["children"][1]["percentage"] * 100
      @extraversion_name2 = @watson_data2["children"][0]["children"][0]["children"][2]["id"] * 100
      @extraversion_rating2 = @watson_data2["children"][0]["children"][0]["children"][2]["percentage"] * 100
      @agreeableness_name2 = @watson_data2["children"][0]["children"][0]["children"][3]["id"] * 100
      @agreeableness_rating2 = @watson_data2["children"][0]["children"][0]["children"][3]["percentage"] * 100
      @neuroticism_name2 = @watson_data2["children"][0]["children"][0]["children"][3]["id"] * 100
      @neuroticism_rating2 = @watson_data2["children"][0]["children"][0]["children"][3]["percentage"] * 100

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
