const mongoose = require('mongoose');
const ToyTypeSchema = mongoose.Schema(
   {
      "name": String,
   }
);
const ToyTypeModel = mongoose.model("ToyTypes", ToyTypeSchema, "toytype");
module.exports = ToyTypeModel;