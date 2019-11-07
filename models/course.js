const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  courseNum: {
    type: Number,
    minlength: 5,
    maxlength: 7,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'course name'
  },
  department: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'department name'
  },
  instructor: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'instructor name'
  },
  seats: {
    type: Number,
    minlength: 1,
    maxlength: 30,
    required: true,
    default: 1
  },
  location: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'NWMSU'
  }
})
module.exports = mongoose.model('Section', SectionSchema)
