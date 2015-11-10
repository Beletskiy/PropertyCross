//var app = app || {};
var Router = Backbone.Router.extend({
    routes: {
        '': 'form',
        'search?q=*q': 'searchResults',
        'error?code=*code': 'showError',
        'faves': 'faves',
        '*notFound': 'form'
    },
    form: function () {
        app.Views.form.render();
    },

    searchResults: function (q) {

    },

    showError: function (code) {


    },

    faves: function () {

    }
});

