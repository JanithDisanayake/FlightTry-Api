const express = require('express');
const router = express.Router();
const { store } = require('../controllers/flightController');

router.route('/').get((req, res) => {

    Flight.find().then((flights)=> {
        res.json(flights);
    }).catch((err)=>{
        console.log(err);
    })

});

router.post('/', store);

module.exports = router;