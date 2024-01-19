const mongoose = require('mongoose');
const feeSchema = new mongoose.Schema({
    tution_fee: Number,
    exam_fee: Number,
    lib_fee: Number,
    annual_fee: Number
}
)
const feeModel = mongoose.model("fee", feeSchema);
module.exports=feeModel;