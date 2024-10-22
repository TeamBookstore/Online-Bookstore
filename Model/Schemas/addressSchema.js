const mongoose = require("mongoose");
const {Schema} = mongoose;

const AddressSchema = new Schema({
    FirstLine: String,
    SecondLine: String,
    ZipCode: Number,
    City: String,
    Country: String,
});
module.exports = (connection) => connection.model("Address", AddressSchema)
