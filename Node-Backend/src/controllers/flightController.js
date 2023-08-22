
let Flight = require('../models/Flights');

const store = async(req, res) => {
    try {
        const {test, name , age}  = req.body

        console.log(test)
        res.send('{message: "thank you"}')

    }catch (error) {
        console.log(error)
        throw error
    }
}