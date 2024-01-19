const express = require('express');
const router = express.Router();
const feeModel = require('./feeModel');
//fee routes
router.post("/", async (req, res) => {
    const fees = new feeModel(req.body);
    const savedData = await fees.save();
    res.status(200).json(savedData)
})
router.get("/", async (req, res) => {
    const feeDet = await feeModel.find({});
    res.status(200).json(feeDet);
})
router.put("/:id", async (req, res) => {
    const updated = await feeModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updated);
})
module.exports=router;