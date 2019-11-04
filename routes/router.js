/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile('index.html')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  res.sendFile('index.html')
})

// Defer path requests to a particular controller
router.use('/dev', require('../controllers/developer.js'))
router.use('/instructor', require('../controllers/instructor.js'))
router.use('/course', require('../controllers/course.js'))
router.use('/section', require('../controllers/section.js'))
router.use('/student', require('../controllers/student.js'))

console.log('END routing')
module.exports = router
