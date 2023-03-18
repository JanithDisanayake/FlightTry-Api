const express = require("express");
const router = express.Router();


router.route('/').get((req, res) => {
    const airports = require('../airports.json');
    res.json(airports);
});

router.route('/code').get((req, res) => {
    const data = require('../airports.json');
    let airports = new Array();
    data.forEach( (item) => {
        if(req.query.code == item.iata_code)
            airports.push(item);
    });

    res.send(airports);
})

router.route('/country').get((req, res) => {
    const data = require('../airports.json');
    let airports = new Array();
    data.forEach((item) => {
        if(req.query.country == item.country)
            airports.push(item);
    })

    res.send(airports);
})

router.route('/name').get((req, res) => {
    const data = require('../airports.json');
    let airports = new Array();
    data.forEach((item) => {
        if(req.query.name.toLowerCase() == item.name.toLowerCase())
            airports.push(item);
        else {
            let current;
            for(let i=0; i<req.query.name.length; i++) {
                if(req.query.name.toLowerCase().charAt(i) == item.name.toLowerCase().charAt(i)) 
                    current = item;
                else {
                    current = null;
                    break
                }
            }
            if(current!=null) airports.push(current);
        }

    })

    res.send(airports);
}) 

module.exports = router;