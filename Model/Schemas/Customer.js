const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  FirstName: String,
  SecondName: String,
  Phone: Number,
  Age: Number,
  Password: String,
  email: String,
  Active: Boolean,
  Address: { type: Schema.Types.ObjectId, ref: "Address" },
});

module.exports = (connection) => connection.model("Customer", CustomerSchema);
