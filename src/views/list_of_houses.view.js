var ListOfHousesView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#list-template').html()),

    render: function () {
        this.$el.html(this.template());
    }
});