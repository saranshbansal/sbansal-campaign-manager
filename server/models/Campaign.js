const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignSchema = new Schema({
  name: String,
  description: String
});

mongoose.model("campaigns", campaignSchema);
