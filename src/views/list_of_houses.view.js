var ListOfHousesView = Backbone.View.extend({
    el: '#wrapper',
    template: _.template($('#list-template').html()),

    initialize: function () {
        this.listenTo(app.Collections.ListOfHouses, 'reset', this.render);
    },

    initRender: function  (urlParam) {
        console.log(urlParam);
        this.$el.html(this.template({
            amountHousesOnThePage: 0,
            amountOfAllHouses: 0 // set spinner
        }));
        $(".spinner-loader").show();
        app.Collections.ListOfHouses.fetch({
            reset: true,
            error: function (collection, response, options) {
                console.log('error');
            }
        });
    },

    renderError: function  () {
// show error
    },

    render: function () {
        console.log('render');
        this.$el.html(this.template({
            amountHousesOnThePage: 20,
            amountOfAllHouses: this.amountOfAllHouses // initialise must be before render...
        }));
    }
});