const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchema = new Schema({
    Card: { type: Boolean, required: true, default: false},
    Transfer: { type: Boolean, required: true, default: false},
    Description: {type: String}
})

const BuysSchema = new Schema({
  User_id: { type: Schema.Types.ObjectId, ref: "Customer" },
  Book_id: { type: Schema.Types.ObjectId, ref: "Books" },
  Date: {type: Date, default: Date.now,},
  Mounth: {type: Number, required: true},
  TypeOfPayment: {type: PaymentSchema, required: true},
});

module.exports = (connection) => connection.model("Buys", BuysSchema);
