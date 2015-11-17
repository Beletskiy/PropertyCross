/*global Backbone, _, */
var FavoriteListView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#favorite-template').html()),

    events: {
        'click .house-list li': 'houseDetail'
    },

    render: function () {
        'use strict';

        this.$el.html(this.template({}));
        this.$el.find('.favorite-list').append(app.Views.houseinfoBriefly.render(app.Collections.Favorites, 'faves'));
    },
    houseDetail: function() {
        'use strict';
        console.log('from favorite');
    }
});


