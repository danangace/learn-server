const route = require('express').Router()
const UserController = require('../controllers/userController')

route.post('/', UserController.insertUser)

// route.get('/', (req,res) => {
//   res.send('mantap')
// })

module.exports = route