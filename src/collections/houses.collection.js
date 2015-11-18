/* global Backbone */
var ListOfHousesCollection = Backbone.Collection.extend({

    url: function () {
        'use strict';
        var URL = 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy',
            page = '&page=' + app.Views.listOfHouses.pageNumber,
            city = '&place_name=' + app.Views.listOfHouses.city;
        return URL + page + city;
    },

    model: HouseModel,

    commonInfo: {
        totalResults : 0
    },

    parse: function (data) {
        'use strict';
        var arrOfObj = data.response.listings,
            result = [];
        if (!arrOfObj) {
            return false;
        }

        this.commonInfo.totalResults = data.response.total_results;

        for (var i = 0; i < arrOfObj.length; i++) {
            result.push({
                price_formatted: arrOfObj[i].price_formatted,
                summary: arrOfObj[i].summary,
                thumb_url: arrOfObj[i].thumb_url,
                img_url: arrOfObj[i].img_url,
                title: arrOfObj[i].title,
                bedroom_number: arrOfObj[i].bedroom_number,
                bathroom_number: arrOfObj[i].bathroom_number,
                guid: arrOfObj[i].guid
            });
        }
        return result;
    }
});