var ListOfHousesCollection = Backbone.Collection.extend({
    //initialize: function (models, city) {
    //    this.city = city;
    //},
    //url: function () {
    //    var URL = 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy&place_name=soho';
    //    // + this.city
    //    return URL;
    //},
    url: 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy&place_name=london', //+city
    model: HouseModel,

    parse: function (data) {
        //  this.page=response.page;
        var arrOfObj = data.response.listings,
            arrOfObjCutted = [];
        console.log(data.response.total_results);

        for (var i = 0; i < arrOfObj.length; i++) {
            arrOfObjCutted.push({
                price_formatted: arrOfObj[i].price_formatted,
                summary: arrOfObj[i].summary,
                thumb_url: arrOfObj[i].thumb_url
            });
        }
        console.log(arrOfObjCutted);
        return arrOfObjCutted;
    }
});