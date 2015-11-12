var ListOfHousesView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#list-part1-template').html()),

    events: {
        'click #more-results': 'loadMoreResults'
    },

    initialize: function () {
        this.listenTo(app.Collections.ListOfHouses, 'reset', this.render);
        this.listenTo(app.Collections.ListOfHouses, 'reset', this.addAll);
    },

    initRender: function (urlParam) {
        this.city = urlParam; //так можно? см.строку 5 в collections
        this.pageNumber = 1;
        this.$el.html(this.template({
            amountHousesOnThePage: 0,
            amountOfAllHouses: 0
        }));
        $("#spinner-loader").show();
        app.Collections.ListOfHouses.fetch({
            reset: true,
            error: function (collection, response, options) {
                console.log('error');
                this.renderError();
            }
        });
    },

    renderError: function () {
        // show error
    },

    render: function () {
        console.log('render');
        var totalResults = app.Collections.ListOfHouses.models[0].attributes.total_results;
        this.$el.html(this.template({
            amountHousesOnThePage: 20,
            amountOfAllHouses: totalResults
        }));
        $("#more-results").removeClass("more-results-hide").addClass("more-results-show");
    },

    addAll: function () {
        $('.house-list').append(app.Views.houseinfoBriefly.render());
    },

    loadMoreResults: function() {
        this.pageNumber++;
    }
});