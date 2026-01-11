const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/bunderlust";

main()
.then(() => {
        console.log("connected to DB");
    })
.catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    try {
      await Listing.deleteMany({});
      initData.data = initData.data.map((obj) => ({
        ...obj ,
        owner : "6742b558f3436f1a37568a87" ,
      }));
      await Listing.insertMany(initData.data);
      console.log("Data was initialized");
    } catch (err) {
      console.error("Error initializing data:", err);
    }
  };

initDB();
                                                                                                                              