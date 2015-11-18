/*global Backbone, _, */
var FavoriteListView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#favorite-template').html()),

    events: {
        'click .favorite-list li': 'houseDetail'
    },

    render: function () {
        'use strict';
        var messageAboutNoFavorites = 'You have not added any properties to your favourites';
        this.$el.html(this.template({}));
        if (app.Collections.Favorites.models.length > 0) {
            this.$el.find('.favorite-list').append(app.Views.houseinfoBriefly.render(app.Collections.Favorites, 'faves'));
        } else {
            this.$el.append(messageAboutNoFavorites);
        }
    },
    houseDetail: function (el) {
        'use strict';
        var index = el.currentTarget.id;
        app.Routers.main.navigate('faves/house?number=' + index, {trigger: true});
    }
});


