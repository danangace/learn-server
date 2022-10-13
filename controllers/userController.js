const { User } = require('../models')

class UserController {
  static insertUser (req,res) {
    const { firstName, lastName, age } = req.body
    User.create({
      id: 4,
      firstName,
      lastName,
      age,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(user => {
      res.status(201).json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

module.exports = UserController