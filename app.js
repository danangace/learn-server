const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')

// app
const app = express()

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// router
app.use(router)

module.exports = app