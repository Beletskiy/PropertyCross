/* global Backbone */
var FavoritesCollection = Backbone.Collection.extend({
    model: HouseModel,
    localStorage: new Backbone.LocalStorage('PropertyCross')
});