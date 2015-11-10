var app = app || {};
app.HouseView = Backbone.View.extend({
    tagName: 'li',
    className: '',
    template: _.template( $('#').html() ),
    render: function() {
        // tmpl – это функция, которая принимает JSON-объект и возвращает html
        // мы определили this.el в tagName. Используйте $el для доступа
        // к jQuery-функции html()
        this.$el.html( this.template( this.model.toJSON() ));
        return this;
    }
});