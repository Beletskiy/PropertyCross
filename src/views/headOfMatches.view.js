var HeadOfMatchesView = Backbone.View.extend({

    tagName: 'p',
    template: _.template($('#list-part0-template').html()),
    events: {
        //'click .house': 'houseView',

    },
    initialize: function () {
        this.listenTo(app.Collections.ListOfHouses, 'sync', this.render);
    },

    initRender: function (urlParam) {
        this.city = urlParam;
        this.pageNumber = 1;
        this.$el.html(this.template({
            amountHousesOnThePage: 0,
            amountOfAllHouses: 0
        }));
        $("#spinner-loader").show();
        app.Collections.ListOfHouses.fetch({
            reset: true,
            error: function (collection, response, options) {
                console.log('error in initRender');
                this.renderError();
            }
        });
    },
    render: function() {
        console.log('render');
        var totalResults = app.Collections.ListOfHouses.models[0].attributes.total_results;
        this.$el.html(this.template({
            amountHousesOnThePage: 20*this.pageNumber,
            amountOfAllHouses: totalResults
        }));
    }

});