const mongoose = require('mongoose');
const ToySchema = mongoose.Schema(
   {
      "name": String,
      "img": String,
      "price": Number,
      "quantity": Number,
      "origin": String,
   }
);
const ToyModel = mongoose.model("toys", ToySchema, "toys");
module.exports = ToyModel;