const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  sectionNum: {
    type: Number,
    required: true
  },
  days: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: "MWF"
  },
  startTime: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  location: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
  },
  instructor: {
    type: Number,
    required: true
  },
  courseID: {
    type: Number,
    required: true
  }

})
module.exports = mongoose.model('Section', SectionSchema)
