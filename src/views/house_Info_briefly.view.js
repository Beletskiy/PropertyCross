var HouseView = Backbone.View.extend({

    tagName: 'li',
    template: _.template($('#list-part3-template').html()),
    events: {
        //'click .one-house-briefly': 'houseDetail'
    },

    render: function () {
        // console.log(app.Collections.ListOfHouses.models);
        var startRenderPosition = (app.Views.listOfHouses.pageNumber - 1) * NUMBER_OF_RESULTS;
        for (var i = 1 + startRenderPosition; i < app.Collections.ListOfHouses.models.length; i++) {
            this.$el.html(this.template({
                thumbUrl : app.Collections.ListOfHouses.models[i].attributes.thumb_url,
                priceFormatted: app.Collections.ListOfHouses.models[i].attributes.price_formatted,
                summary: app.Collections.ListOfHouses.models[i].attributes.summary
            }));
            $('.house-list').append(this.$el.html());
        }
    },

    houseDetail: function () {
        console.log("houseDetail");
    }

});