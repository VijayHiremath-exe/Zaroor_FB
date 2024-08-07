const mongoose = require('mongoose');

const FoodDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Indian", "Italin", "Chanies", "South"],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    } 
});

const FoodDataModel = mongoose.model('food', FoodDataSchema);

module.exports = FoodDataModel;
