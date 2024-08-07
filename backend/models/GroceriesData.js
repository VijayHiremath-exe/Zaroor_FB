const mongoose = require('mongoose');

const GroceriesDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Fruits", "Vegitables","Seeds"],
        required: true
    },
    price: {
        type: Number,
        required: true
    } 
});

const GroceriesDataModel = mongoose.model('groceries', GroceriesDataSchema);

module.exports = GroceriesDataModel;
