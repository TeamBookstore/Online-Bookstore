const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  FirstName: {String, required: true},
  SecondName: {String, required: true},
  Phone: {Number, required: true},
  Age: Number,
  Password: {String, required: true},
  email: {String, required: true},
  Active: Boolean,
  Rack: [],
  type: {Number, required: true},
  Kart: [],
  Wishlist: [],
  Records: [],
  Pay: { type: Schema.Types.ObjectId, ref: "Address" },
});

module.exports = (connection) => connection.model("Customer", CustomerSchema);