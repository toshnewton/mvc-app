const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  sectionnumber: {
    type: char,
    required: true
  },
  days: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  starttime: {
    type: Number,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  roomnumber: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
  },
  instructorid: {
    type: Number,
    required: true
  },
  courseid: {
    type: Number,
    required: true
  }

})
module.exports = mongoose.model('Section', SectionSchema)
