const mongoose = require("mongoose");
const Campaign = mongoose.model("campaigns");

module.exports = app => {
  app.get(`/api/campaigns`, async (req, res) => {
    let campaigns = await Campaign.find();
    return res.status(200).send(campaigns);
  });

  app.post(`/api/campaign`, async (req, res) => {
    let campaign = await Campaign.create(req.body);
    return res.status(201).send({
      error: false,
      campaign
    });
  });

  app.put(`/api/campaign/:id`, async (req, res) => {
    const { id } = req.params;

    let campaign = await Campaign.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      campaign
    });
  });

  app.delete(`/api/campaign/:id`, async (req, res) => {
    const { id } = req.params;

    let campaign = await Campaign.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      campaign
    });
  });
};
