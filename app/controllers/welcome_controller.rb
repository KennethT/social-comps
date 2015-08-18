class WelcomeController < ApplicationController

  def index
    if params[:search_term1].present?
      @tweet1 = $twitter.search("#{params[:search_term1]}", result_type: "recent", lang: "en", geo_enabled: "true").take(500)

      @geo1 = @tweet1.map do |tweet|
        [tweet.geo.lat, tweet.geo.long].flatten
      end.reject {|array| array == [] || array == [0.0, 0.0] }

      # creating an value of a JSON to be sent to bluemix watson api / microservice
      @watson1 = @tweet1.map do |tweet|
        tweet.text
      end.join(', ')
      # watson_send1 is formatted for the watson api end point
      @watson_send1 = {"words" => @watson1}.to_json

      conn = Faraday.new(:url => 'http://socialcompz.mybluemix.net')
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
      @tweet2 = $twitter.search("#{params[:search_term2]}", result_type: "recent", lang: "en", geo_enabled: "true").take(500)


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
      @openness_rating1 = @watson_data1["children"][0]["children"][0]["children"][0]["percentage"]
      @conscientiousness_rating1 = @watson_data1["children"][0]["children"][0]["children"][1]["percentage"]
      @extraversion_rating1 = @watson_data1["children"][0]["children"][0]["children"][2]["percentage"]
      @agreeableness_rating1 = @watson_data1["children"][0]["children"][0]["children"][3]["percentage"]
      @neuroticism_rating1 = @watson_data1["children"][0]["children"][0]["children"][3]["percentage"]

      # OCEAN for watson2 data
      @openness_rating2 = @watson_data2["children"][0]["children"][0]["children"][0]["percentage"]
      @conscientiousness_rating2 = @watson_data2["children"][0]["children"][0]["children"][1]["percentage"]
      @extraversion_rating2 = @watson_data2["children"][0]["children"][0]["children"][2]["percentage"]
      @agreeableness_rating2 = @watson_data2["children"][0]["children"][0]["children"][3]["percentage"]
      @neuroticism_rating2 = @watson_data2["children"][0]["children"][0]["children"][3]["percentage"]


      # Needs for watson1 data
      @need_challenge1 = @watson_data1["children"][1]["children"][0]["children"][0]["percentage"]
      @need_closeness1 = @watson_data1["children"][1]["children"][0]["children"][1]["percentage"]
      @need_curiosity1 = @watson_data1["children"][1]["children"][0]["children"][2]["percentage"]
      @need_excitement1 = @watson_data1["children"][1]["children"][0]["children"][3]["percentage"]
      @need_harmony1 = @watson_data1["children"][1]["children"][0]["children"][4]["percentage"]
      @need_ideal1 = @watson_data1["children"][1]["children"][0]["children"][5]["percentage"]
      @need_liberty1 = @watson_data1["children"][1]["children"][0]["children"][6]["percentage"]
      @need_love1 = @watson_data1["children"][1]["children"][0]["children"][7]["percentage"]
      @need_practicality1 = @watson_data1["children"][1]["children"][0]["children"][8]["percentage"]
      @need_selfexpression1 = @watson_data1["children"][1]["children"][0]["children"][9]["percentage"]
      @need_stability1 = @watson_data1["children"][1]["children"][0]["children"][10]["percentage"]
      @need_structure1 = @watson_data1["children"][1]["children"][0]["children"][11]["percentage"]

      # Needs for watson2 data
      @need_challenge2 = @watson_data2["children"][1]["children"][0]["children"][0]["percentage"]
      @need_closeness2 = @watson_data2["children"][1]["children"][0]["children"][1]["percentage"]
      @need_curiosity2 = @watson_data2["children"][1]["children"][0]["children"][2]["percentage"]
      @need_excitement2 = @watson_data2["children"][1]["children"][0]["children"][3]["percentage"]
      @need_harmony2 = @watson_data2["children"][1]["children"][0]["children"][4]["percentage"]
      @need_ideal2 = @watson_data2["children"][1]["children"][0]["children"][5]["percentage"]
      @need_liberty2 = @watson_data2["children"][1]["children"][0]["children"][6]["percentage"]
      @need_love2 = @watson_data2["children"][1]["children"][0]["children"][7]["percentage"]
      @need_practicality2 = @watson_data2["children"][1]["children"][0]["children"][8]["percentage"]
      @need_selfexpression2 = @watson_data2["children"][1]["children"][0]["children"][9]["percentage"]
      @need_stability2 = @watson_data2["children"][1]["children"][0]["children"][10]["percentage"]
      @need_structure2 = @watson_data2["children"][1]["children"][0]["children"][11]["percentage"]

      # Values for watson1 data
      @values_conservation1 = @watson_data1["children"][2]["children"][0]["children"][0]["percentage"]
      @values_openness_to_change1 = @watson_data1["children"][2]["children"][0]["children"][1]["percentage"]
      @values_hedonism1 = @watson_data1["children"][2]["children"][0]["children"][2]["percentage"]
      @values_self_enhancement1 = @watson_data1["children"][2]["children"][0]["children"][3]["name"]
      @values_self_transcendence1 = @watson_data1["children"][1]["children"][0]["children"][4]["percentage"]

      # Values for watson2 data
      @values_conservation2 = @watson_data2["children"][2]["children"][0]["children"][0]["percentage"]
      @values_openness_to_change2 = @watson_data2["children"][2]["children"][0]["children"][1]["percentage"]
      @values_hedonism2 = @watson_data2["children"][2]["children"][0]["children"][2]["percentage"]
      @values_self_enhancement2 = @watson_data2["children"][2]["children"][0]["children"][3]["name"]
      @values_self_transcendence2 = @watson_data2["children"][1]["children"][0]["children"][4]["percentage"]


    end



  end


end
