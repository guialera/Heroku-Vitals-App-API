const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vitalsDataSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    systolicBloodPressure: {
        type: String,
        required: true
    },
    diastolicBloodPressure: {
        type: String,
        required: true
    },
    heartRate: {
        type: String,
        required: true
    },
    oxygenSaturation: {
        type: String,
        required: true
    },
    sugarLevel: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("VitalsData", vitalsDataSchema)