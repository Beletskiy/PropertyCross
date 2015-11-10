var app = app || {};
app.listOfHouses = Backbone.Collection.extend({
    model: app.House
});