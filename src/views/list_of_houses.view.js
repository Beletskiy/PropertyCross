var ListOfHousesView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#list-part1-template').html()),

    events: {
        'click #more-results': 'loadMoreResults'
    },

    initialize: function () {
        this.listenTo(app.Collections.ListOfHouses, 'sync', this.render);
        //this.listenTo(app.Collections.ListOfHouses, 'reset', this.addAll);
      //  this.listenTo(app.Collections.ListOfHouses, 'sync', this.addAll);
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

    renderError: function () {
        // show error
    },

    render: function () {
        console.log('render');
        var totalResults = app.Collections.ListOfHouses.models[0].attributes.total_results;
        this.$el.html(this.template({
            amountHousesOnThePage: 20 * this.pageNumber,
            amountOfAllHouses: totalResults
        }));
        $('.house-list').append(app.Views.houseinfoBriefly.render());
        $("#more-results").removeClass("more-results-hide").addClass("more-results-show");
    },

    addAll: function () {
        console.log("from addAll");

        this.$el.find('.house-list').append(app.Views.houseinfoBriefly.render());
    },

    loadMoreResults: function () {
        this.pageNumber++;
        $("#more-results").removeClass("more-results-show").addClass("more-results-hide");
        $("#spinner-loader").show();
        app.Collections.ListOfHouses.fetch({
            remove: false,
            success: function () {
                $("#spinner-loader").hide();
                $("#more-results").removeClass("more-results-hide").addClass("more-results-show");
            },
            error: function (collection, response, options) {
                console.log('error in more results');
            }
        });
    }
});