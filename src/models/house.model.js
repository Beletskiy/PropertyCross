var HouseModel = Backbone.Model.extend({

    defaults: {                    //оставить только то что надо
        bathroom_number : null,
        bedroom_number : null,
        img_url : '',
        price_formatted : '',
        summary : '',
        thumb_url : '',
        title : ''
    }
});

