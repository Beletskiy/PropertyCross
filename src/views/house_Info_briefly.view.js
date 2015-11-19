/* global app, Backbone, _ */

var HouseView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#one-house-template').html()),

    render: function (collection, type) {
        'use strict';
        var startRenderPosition,
            result = [];
        if (type === 'faves') {
            startRenderPosition = 0;
        } else {
            startRenderPosition = (app.Views.listOfHouses.pageNumber - 1) * NUMBER_OF_RESULTS;
        }

        for (var i = startRenderPosition; i < collection.models.length; i++) {
            this.$el.html(this.template({
                id: i,
                thumbUrl: collection.models[i].attributes.thumb_url,
                priceFormatted: collection.models[i].attributes.price_formatted,
                summary: collection.models[i].attributes.summary
            }));
            result.push(this.$el.html());
        }
        return result;
    }
});