import mongoose from "mongoose";

const Schema =  mongoose.Schema;

const flightSchema = new Schema({
    aircraft_iata: {
        type: String,
        required: true
    },
    airline_iata: {
        type: String,
        required: true
    },
    aircraft_name: {
        type: String,
        required: true
    },
    flight_date: {
        type: Date,
        required: true
    },
    flight_status: {
        type: Boolean,
        required: true
    }

})

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight