var app = app || {};
app.listOfHousesView = Backbone.View.extend({
    el: '#',
    initialize: function( initialHouse ) {
        this.collection = new app.listOfHouses( initialHouse );
        this.render();
    },
    render: function() {
        this.collection.each(function( item ) {
            this.renderHouse( item );
        }, this );
    },

    renderHouse: function( item ) {
        var houseView = new app.HouseView({
            model: item
        });
        this.$el.append( houseView.render().el );
    }
});