const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT MODELS
require("./models/Campaign");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://saranshbansal:saransh77@ds145230.mlab.com:45230/sbansal-campaigns-db`
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");

    return res.status(200).json({});
  }

  next();
});

app.use(bodyParser.json());

//IMPORT ROUTES
require("./routes/CampaignRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
