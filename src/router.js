/* global Backbone */
var Router = Backbone.Router.extend({

    routes: {
        '': 'form',
        'search?q=*q': 'searchResults',
        'house?number=*q' : 'houseDetails',
        'faves' : 'favorite'
    },

    form: function () {
        app.Views.form.render();
    },

    searchResults: function (q) {
        app.Views.listOfHouses.initRender(q);
    },

    houseDetails: function (q) {
        app.Views.details.render(q);
    },

    favorite: function() {
        app.Views.favorite.render();
    }
});

