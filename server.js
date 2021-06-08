const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const port = process.env.PORT || 9000
const secret = process.env.SECRET || "coke vanilla sauce chicken"

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.log(error))

app.use(express.json())

app.use(morgan("dev"))

app.use("/vitals", require("./routes/vitalsRoute.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if (err === "UnauthorizedErr") {
        res.status(err.status)
    }
    return (res.send({ errMessage: err.message }))
})

app.listen(port, () => {
    console.log("Running on Port 9000")
})