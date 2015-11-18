/*global Backbone, _, */
var ListOfHousesView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#list-part1-template').html()),
    templateList: _.template($('#list-part2-template').html()),

    events: {
        'click #more-results': 'loadMoreResults',
        'click .house-list li': 'houseDetail'
    },

    initialize: function () {
        'use strict';
        this.listenTo(app.Collections.ListOfHouses, 'sync', this.render);
    },

    initRender: function (urlParam) {
        var self = this;
        this.city = urlParam;
        this.pageNumber = 1;
        this.$el.html(this.template({
            amountHousesOnThePage: 0,
            amountOfAllHouses: 0
        }));
        this.$el.append(this.templateList({amountOfAllHouses: 0}));
        this.$el.find('#spinner-loader').show();
        app.Collections.ListOfHouses.fetch({
            reset: true,
            success: function () {

                console.log('success initRender');
                self.$el.find('#spinner-loader').hide();
            },
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
        'use strict';
        console.log('render houses view');
        var totalResults = app.Collections.ListOfHouses.commonInfo.totalResults;
        this.$el.find('#matches').html(this.template({
            amountHousesOnThePage: NUMBER_OF_RESULTS * this.pageNumber,
            amountOfAllHouses: totalResults
        }));
        this.$el.find('#list-part2-template').html(this.templateList({amountOfAllHouses: totalResults}));
        this.$el.find('.house-list').append(app.Views.houseinfoBriefly.render(app.Collections.ListOfHouses));
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