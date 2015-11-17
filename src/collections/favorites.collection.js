/* global Backbone */
var FavoritesCollection = Backbone.Collection.extend({
    model: HouseModel,
    localStorage: new Backbone.LocalStorage('PropertyCross'),

    initialize: function () {
        'use strict';
        var favorites = JSON.parse(localStorage.getItem('favorites'));
        this.add(favorites);
        this.on('add remove', function () {
            //console.log(JSON.stringify(this));
            localStorage.setItem('favorites', JSON.stringify(this));
        });
    }
});