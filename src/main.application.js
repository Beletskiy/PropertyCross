var app = {
    Views: {},
    Models: {},
    Collections: {},
    Routers: {}
};

app.Models.house = new HouseModel();
app.Collections.ListOfHouses = new ListOfHousesCollection();
app.Views.houseinfoBriefly = new HouseView();
app.Views.listOfHouses = new ListOfHousesView();
app.Views.form = new FormView();
app.Routers.main = new Router();
Backbone.history.start();
