const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  gpa: {
    type: Number,
    minlength: 1,
    maxlength: 3,
    required: true
  },
  gitHub: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://www.github.com/your-github'
  },
  website: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://yourwebsite.com'
  },
  sectionID: {
    type: Number,
    minlength: 1,
    maxlength: 4,
    required: true
  }

})
module.exports = mongoose.model('Student', StudentSchema)
