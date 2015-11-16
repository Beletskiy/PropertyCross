/* global Backbone,_ */
var DetailsView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#details-template').html()),
    events: {
        'click .faves': 'saveToFavorite'

    },

    render: function (index) {
        'use strict';

        this.$el.html(this.template({
            priceFormatted: app.Collections.ListOfHouses.models[index].attributes.price_formatted,
            title: app.Collections.ListOfHouses.models[index].attributes.title,
            imgUrl : app.Collections.ListOfHouses.models[index].attributes.img_url,
            bedroomNumber : app.Collections.ListOfHouses.models[index].attributes.bedroom_number,
            bathroomNumber : app.Collections.ListOfHouses.models[index].attributes.bathroom_number,
            summary: app.Collections.ListOfHouses.models[index].attributes.summary
        }));
    },
    saveToFavorite: function() {

    }
});