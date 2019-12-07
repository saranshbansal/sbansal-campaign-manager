const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignSchema = new Schema({
  name: String,
  createdOn: Number,
  price: Number,
});

mongoose.model("campaigns", campaignSchema);
