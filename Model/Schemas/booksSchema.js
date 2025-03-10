const mongoose = require("mongoose");
const {Schema} = mongoose;



const CommentSchema = new Schema({
    Customer_id: { type: Schema.Types.ObjectId, ref: "Address" },
    Comment: {type: String, required: true}
})

const CategoriesSchema = new Schema({
    action: {type: Boolean,default: false,},
    suspense: {type: Boolean,default: false,},
    romance: {type: Boolean,default: false,},
    fantasy: {type: Boolean,default: false,},
    horror: {type: Boolean,default: false,},
    scienceFiction: {type: Boolean,default: false,},
    mystery: {type: Boolean,default: false,},
    historical: {type: Boolean,default: false,},
    drama: {type: Boolean,default: false,}
})

const BooksSchema = new Schema({
    Title: {type: String, required: true},
    Price: {type: String, required: true},
    Score: {type: Number},
    Languague: {type: String, required: true},
    Author: {type: String, required: true},
    Editorial: {type: String, required: true},
    description: {type: String, required: true},
    Category: [{type: CategoriesSchema, required: true}],
    Comments: [{type: CommentSchema, required: true}]

});
module.exports = (connection) => connection.model("Books", BooksSchema);