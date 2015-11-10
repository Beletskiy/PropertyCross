var app = app || {};

app.House = Backbone.Model.extend({

    defaults: {
        auction_date : null,
        bathroom_number : "",
        bedroom_number : null,
        car_spaces : null,
        commission : 0,
        construction_year : 0,
        datasource_name : "",
        guid : "",
        img_height : null,
        img_url : "",
        img_width : null,
        keywords : "",
        //"latitude" : 51.4604988098144531,
        //"lister_name" : "John Payne",
        //"lister_url" : "",
        //"listing_type" : "buy",
        //"location_accuracy" : 10,
        //"longitude" : 0.0102599998936057091,
        price : null,
        price_currency : "GBP",
        price_formatted : "379,950 GBP",
        //"price_high" : 379950,
        //"price_low" : 379950,
        //"price_type" : "fixed",
        property_type : "",
        summary : "",
        thumb_height : null,
        thumb_url : "",
        thumb_width : null,
        title : ""
        //"updated_in_days" : 14.5,
        //"updated_in_days_formatted" : "two weeks ago"
    }
});

