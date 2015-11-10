var Router = Backbone.Router.extend({

    routes: {
        '': 'form',
        'search?q=*q': 'searchResults'
    },

    form: function () {
        app.Views.form.render();
    },

    searchResults: function (q) {
        app.Views.listOfHouses.render();
    }
});

