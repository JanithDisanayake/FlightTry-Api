import express from "express";
import cors from "cors";
import 'dotenv/config'; // for middleware 
import { connect } from "./utils/database.connection";
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080 ;

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
// app.use(cors({ origin: [ "https://localhost:3000"]})) // only accessed by 3000
// app.use(express.json({limit: "30mb"}));

const airportRoute = require("./routes/airport")
app.use('/v1/airports/', airportRoute);

const flightRoute = require("./routes/flight")
app.use('/v1/flights', flightRoute);

app.listen(PORT, ()=> {
    console.log(`🚀 Server is up and running  on PORT ${PORT}`);
    connect();
});