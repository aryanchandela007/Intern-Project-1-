const mongoose = require('mongoose');
const studSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true
        },
        roll_no: String,
        Admission_date: {
            type: Date
        }
    }
)
const studModel = mongoose.model("Student", studSchema);
module.exports=studModel;