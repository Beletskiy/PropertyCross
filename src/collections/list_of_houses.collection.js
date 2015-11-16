var ListOfHousesCollection = Backbone.Collection.extend({
    url: function () {
        var URL = 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy',
            page = '&page=' + app.Views.listOfHouses.pageNumber,
            city = '&place_name=' + app.Views.listOfHouses.city;
        return URL + page + city;
    },
    //  url: 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy&place_name=soho', //+city
    model: HouseModel,

    parse: function (data) {
        console.log(data);
        var arrOfObj = data.response.listings,
            result = [];

        if (data.request.page === "1") {
            result.push({total_results: data.response.total_results});
        }

        for (var i = 0; i < arrOfObj.length; i++) {
            result.push({
                price_formatted: arrOfObj[i].price_formatted,
                summary: arrOfObj[i].summary,
                thumb_url: arrOfObj[i].thumb_url,

            });
        }
        //  console.log(result);
        return result;
    }
});