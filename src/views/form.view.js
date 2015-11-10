var FormView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#start-template').html()),
    events: {
        'click #go-button': 'goToResultPage'
    },


    goToResultPage: function () {
        console.log('Go to', this.$el.find('.inputCity').val());
        //Backbone.history.navigate('search?q=London', true);
        app.Routers.main.navigate('search?q=London', {trigger: true});
    },

    render: function () {
        this.$el.html(this.template());
    }
});