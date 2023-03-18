import mongoose from "mongoose";
import config from "../config";

let database;

const connect = async  () => {
    const MONGODB_URL = config.DB_CONNECTION

    if (database) return 

    mongoose.connect(MONGODB_URL)
    .then((connection) => {
        database = connection
        console.log("💱 Database Synsced")
    })
    .catch((err) => {
        console.log(err.message);
    })
}

export { connect };