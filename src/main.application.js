var app = {
    Views: {},
    Models: {},
    Collections: {},
    Routers: {}
};
var URL = 'http://api.nestoria.co.uk/api?pretty=1&country=uk&encoding=json&action=search_listings&listing_type=buy&place_name=';
app.Models.house = new HouseModel();
//app.Collections.ListOfHouses = new ListOfHousesCollection();
app.Views.houseinfoBriefly = new HouseView();
app.Views.listOfHouses = new ListOfHousesView();
app.Views.form = new FormView();
app.Routers.main = new Router();
Backbone.history.start(); //route the initial URL
