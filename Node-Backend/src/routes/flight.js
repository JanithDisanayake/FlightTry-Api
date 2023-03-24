const express = require('express');
const router = express.Router();
let Flight = require('../models/Flights');

router.route('/').get((req, res) => {

    Flight.find().then((flights)=> {
        res.json(flights);
    }).catch((err)=>{
        console.log(err);
    })

});

router.route('/').post((req,res,next) => {

    const aircraft_iata = req.body.json.aircraft_iata
    const airline_iata = req.body.json.airline_iata
    const airline_name = req.body.json.airline_name
    const flight_date = req.body.json.flight_date
    const flight_status = req.body.json.flight_status

    console.log(req.body)
    res.json(req.body)
});

module.exports = router;