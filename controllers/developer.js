const express = require('express')
const api = express.Router()
const Model = require('../models/developer.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.developers.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('developer/index.ejs', {
    developers: req.app.locals.developers.query
  })
})

// GET create
api.get('/create', (req, res) => {
  res.render('developer/create', {
    developers: req.app.locals.developers.query,
    developer: new Model()
  })
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('developer/delete', {
    developer: item
  })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('developer/details', {
    developer: item
  })
})

// GET one
api.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('developer/edit', {
    developer: item
  })
})

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// POST new
api.post('/save', (req, res) => {
  console.info(`Handling POST ${req}`)
  console.debug(JSON.stringify(req.body))
  const item = new Model()
  console.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
  item.email = req.body.email
  item.given = req.body.given
  item.family = req.body.family
  item.city = req.body.city
  item.state = req.body.state
  item.zip = req.body.zip
  item.country = req.body.country
  res.send(`THIS FUNCTION WILL SAVE A NEW developer ${JSON.stringify(item)}`)
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING developer with id=${id}`)
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING developer with id=${id}`)
})

module.exports = api
