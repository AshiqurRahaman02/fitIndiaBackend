const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
    imageUrl:String,
    className:String,
    trainerName:String,
    classDiscription:String,
    classNote:String,
    classStatus:String,
    classDate:String,
    classTime:String,
    classFee:Number,
    totalSlots:Number
},{
    versionKey:false
})

const ClassModel = mongoose.model("classes",classSchema)

module.exports = {
    ClassModel
}