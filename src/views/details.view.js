/* global Backbone, _, app*/
var DetailsView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#details-template').html()),
    events: {
        'click #add-to-favorite': 'saveToFavorite',
        'click #remove-from-favorite': 'removeFromFavorite'
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
        if (this.isInFavorite(index)) {
            this.changeButtonFavAttr();
        }
    },
    saveToFavorite: function () {
        'use strict';
        // app.Collections.Favorites.create([app.Collections.ListOfHouses.models[this.index]]);
        app.Collections.Favorites.add(app.Collections.ListOfHouses.models[this.index]);
        this.changeButtonFavAttr();
    },
    removeFromFavorite: function () {
        'use strict';
        this.$el.find('.faves').html(' + ').attr({
            title: 'add to favorite',
            id: 'add-to-favorite'
        });
        console.log(app.Collections.Favorites);
        console.log(app.Collections.ListOfHouses.models[this.index]);
        app.Collections.Favorites.remove(app.Collections.ListOfHouses.models[this.index]);
        console.log(app.Collections.Favorites);
    },
    isInFavorite: function (index) {
        'use strict';
        var currentGuid = app.Collections.ListOfHouses.models[index].attributes.guid,
            currentStorage = JSON.parse(localStorage.getItem('favorites'));
        if (currentStorage) {
            for (var i = 0; i < currentStorage.length; i++) {
                if (currentStorage[i].guid === currentGuid) {
                    return true;
                }
            }
        }
    },
    changeButtonFavAttr: function () {
        'use strict';
        this.$el.find('.faves').html(' - ').attr({
            title: 'remove from favorite',
            id: 'remove-from-favorite'
        });
    }

});