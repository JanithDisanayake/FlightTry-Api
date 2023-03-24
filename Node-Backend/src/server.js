import express from "express";
import cors from "cors";
import 'dotenv/config'; // for middleware 
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || 8080 ;

app.use(cors())
// app.use(cors({ origin: [ "https://localhost:3000"]})) // only accessed by 3000
// app.use(express.json({limit: "30mb"}));

const airportRoute = require("./routes/airport")
app.use('/v1/airports/', airportRoute);

app.listen(PORT, ()=> {
    console.log(`🚀 Server is up and running  on PORT ${PORT}`);
    connect();
});