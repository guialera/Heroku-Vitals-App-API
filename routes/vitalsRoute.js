const express = require("express")
const vitalsRoute = express.Router()
const VitalsData = require("../models/VitalsData.js")

//Get All Vitals

vitalsRoute.get("/", (req, res, next) => {
    VitalsData.find((err, vitals) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(vitals)
    })
})

//Post New Vital

vitalsRoute.post("/", (req, res, next) => {
    const newVital = new VitalsData(req.body)
    newVital.save((err, savedVital) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVital)
    })
})

//Update Vital

vitalsRoute.put("/:vitalId", (req, res, next) => {
    VitalsData.findOneAndUpdate(
        { _id: req.params.vitalId },
        req.body,
        { new: true },
        (err, updatedVital) => {
            if (err) {
                res.status(500)
                next(err)
            }
            return res.status(200).send(updatedVital)
        }
    )
})

//Delete Vital

vitalsRoute.delete("/:vitalId", (req, res, next) => {
    VitalsData.findOneAndDelete({ _id: req.params.vitalId }, (err, deletedVital) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedVital)
    })
})

module.exports = vitalsRoute