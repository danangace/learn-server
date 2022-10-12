const router = require('express').Router()

router.get('/', (_, res) => {
  res.send('Ini routing user')
})

module.exports = router