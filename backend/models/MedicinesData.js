const mongoose = require('mongoose');

const MedicinesDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Painkiller", "Supplements"],
        required: true
    },
    price: { 
        type: Number,
        required: true
    } 
});

const MedicinesDataModel = mongoose.model('medicines', MedicinesDataSchema);

module.exports = MedicinesDataModel;
