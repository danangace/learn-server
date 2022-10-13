if (process.env.NODE_ENV === 'development') require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./router')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/', router)

app.listen(3000, () => {
  console.log('listening to port 3000')
})