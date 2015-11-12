var HouseView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#list-part2-template').html()),
    events: {
        //'click .house': 'houseView',

    },

    initialize: function () {
        //this.listenTo(app.Collections.ListOfHouses, 'reset', this.render);

    },
    render: function () {
        console.log(app.Collections.ListOfHouses.models);
        for (var i = 1; i < app.Collections.ListOfHouses.models.length; i++) {
            this.$el.html(this.template({
                thumbUrl : app.Collections.ListOfHouses.models[i].attributes.thumb_url,
                priceFormatted: app.Collections.ListOfHouses.models[i].attributes.price_formatted,
                summary: app.Collections.ListOfHouses.models[i].attributes.summary
            }));
            $('.house-list').append(this.$el.html());
        }
    }
});