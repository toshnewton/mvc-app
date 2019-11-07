const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const courseData = require('../data/course.json')
const studentData = require('../data/student.json')
const sectionData = require('../data/section.json')
const instructorData = require('../data/instructor.json')

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  db.course = new Datastore()
  db.course.loadDatabase()

  db.student = new Datastore()
  db.student.loadDatabase()

  db.section = new Datastore()
  db.section.loadDatabase()

  db.instructor = new Datastore()
  db.instructor.loadDatabase()

  // insert the sample data into our datastore
  db.developers.insert(developerData)
  db.course.insert(courseData)
  db.student.insert(studentData)
  db.section.insert(sectionData)
  db.instructor.insert(instructorData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  app.locals.course = db.course.find(courseData)
  app.locals.student = db.course.find(studentData)
  app.locals.section = db.course.find(sectionData)
  app.locals.instructor = db.course.find(instructorData)

  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.course.query.length} courses seeded`)
  console.log(`${app.locals.student.query.length} students seeded`)
  console.log(`${app.locals.section.query.length} sections seeded`)
  console.log(`${app.locals.instructor.query.length} instructors seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
