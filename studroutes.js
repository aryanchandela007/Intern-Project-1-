const express = require('express');
const router = express.Router();
const studModel = require('./studModel');
// Student Routes
// registering student
router.post("/reg", (req, res) => {
    const newStudent = new studModel(req.body);
    try {
        const savedStud =  newStudent.save();
        res.status(200).json(savedStud);
    }
    catch (err) { console.log(err) };
})
// getting data
router.get("/:id", async (req, res) => {
    const detail = await studModel.findById(req.params.id);
    res.status(200).json(detail);

})
//removing data
router.delete("/:id", async (req, res) => {
    const deleted = await studModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Student removed successfully.");
})
// updating
router.put("/:id", async (req, res) => {
    const updated = await studModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json("student updated successfully!");
})
//get all students
router.get("/", async (req, res) => {
    try {
        const data = await studModel.find({});
        res.status(200).json(data);
    }
    catch (err) { console.log(err); }
})


module.exports=router;