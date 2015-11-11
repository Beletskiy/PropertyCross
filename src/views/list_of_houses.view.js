var ListOfHousesView = Backbone.View.extend({

    el: '#wrapper',
    template: _.template($('#list-template').html()),

    initialize: function () {
        app.Collections.ListOfHouses = new ListOfHousesCollection([], 'soho'); //need particular city
        app.Collections.ListOfHouses.fetch({
            success: function(){
                console.log(app.Collections.ListOfHouses);
            },
            error: function(){

            }
        });
    },

    render: function () {
        this.$el.html(this.template({
            amountHousesOnThePage : 20,
            amountOfAllHouses: 200 //  распарсить из ответа сервера
        }));
    }
});