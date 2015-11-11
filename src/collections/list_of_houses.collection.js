var ListOfHousesCollection = Backbone.Collection.extend({
    initialize: function(models, city) {
        this.city = city;
    },
    url: function() {
        return URL + this.city;
    },
    model: HouseModel
});