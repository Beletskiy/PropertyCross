var FormView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#form-template').html()),
    events: {
        'click #go-button': 'goToResultPage'
    },


    goToResultPage: function () {
        var cityName =  this.$el.find('#inputCity').val();
        app.Routers.main.navigate("search?q=" + cityName, {trigger: true});
    },

    render: function () {
        this.$el.html(this.template());
    }
});