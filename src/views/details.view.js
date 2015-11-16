/* global Backbone, _, app*/
var DetailsView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#details-template').html()),
    events: {
        'click .faves': 'saveToFavorite'

    },

    render: function (index) {
        'use strict';
        this.index = index;
        this.$el.html(this.template({
            priceFormatted: app.Collections.ListOfHouses.models[index].attributes.price_formatted,
            title: app.Collections.ListOfHouses.models[index].attributes.title,
            imgUrl: app.Collections.ListOfHouses.models[index].attributes.img_url,
            bedroomNumber: app.Collections.ListOfHouses.models[index].attributes.bedroom_number,
            bathroomNumber: app.Collections.ListOfHouses.models[index].attributes.bathroom_number,
            summary: app.Collections.ListOfHouses.models[index].attributes.summary
        }));
    },
    saveToFavorite: function () {
        'use strict';
        console.log(app.Collections.Favorites);
        console.log(app.Collections.ListOfHouses.models[this.index]);
       // app.Collections.Favorites.create([app.Collections.ListOfHouses.models[this.index]]);
        app.Collections.Favorites.add(app.Collections.ListOfHouses.models[this.index]);
        console.log(app.Collections.Favorites);
    }
});