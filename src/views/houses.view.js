/*global Backbone, _, */
var ListOfHousesView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#houses-template').html()),

    events: {
        'click #more-results': 'loadMoreResults',
        'click .house-list li': 'houseDetail'
    },

    initialize: function () {
        'use strict';
        this.listenTo(app.Collections.ListOfHouses, 'sync', this.render);
    },

    initRender: function (urlParam) {
        'use strict';
        this.pageNumber = 1;
        this.city = urlParam;
        app.Collections.ListOfHouses.fetch({
                 reset: true,
                 success: function () {
                     console.log('success initRender');//todo set flag to collection for show spinner
                 },
                 error: function (collection, response, options) {
                     console.log('error in initRender');
                 }
             });
        this.render();
    },

    renderError: function () {
        // show error
    },

    render: function () {
        'use strict';
       // console.log(app.Collections.ListOfHouses.models);
        var totalResults = app.Collections.ListOfHouses.commonInfo.totalResults;
        this.$el.html(this.template({
            amountHousesOnThePage: NUMBER_OF_RESULTS * this.pageNumber,
            amountOfAllHouses: totalResults,
            houses: app.Collections.ListOfHouses.models
        }));
        this.$el.find('#spinner-loader').hide();
        this.$el.find('#more-results').removeClass('more-results-hide').addClass('more-results-show');
    },

    loadMoreResults: function () {
        'use strict';
        var self = this;
        this.pageNumber++;
        this.$el.find('#more-results').removeClass('more-results-show').addClass('more-results-hide');
        this.$el.find('#spinner-loader').show();
        app.Collections.ListOfHouses.fetch({
            remove: false,
            success: function () {
                self.$el.find('#spinner-loader').hide();
                self.$el.find('#more-results').removeClass('more-results-hide').addClass('more-results-show');
            },
            error: function (collection, response, options) {
                console.log('error in more results');
            }
        });
    },

    houseDetail: function (el) {
        'use strict';
        var index = el.currentTarget.id;
        app.Routers.main.navigate('house?number=' + index, {trigger: true});
    }
});