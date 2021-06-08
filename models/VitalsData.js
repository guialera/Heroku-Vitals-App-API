const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vitalsDataSchema = new Schema({
    date: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    systolicBloodPressure: {
        type: Number,
        required: true
    },
    diastolicBloodPressure: {
        type: Number,
        required: true
    },
    heartRate: {
        type: Number,
        required: true
    },
    oxygenSaturation: {
        type: Number,
        required: true
    },
    sugarLevel: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("VitalsData", vitalsDataSchema)