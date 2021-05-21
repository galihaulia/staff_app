const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getDataUser,
  createDataUser,
  updateDataUser,
  deleteDataUser,
} = require('../controllers/users')

router.get('/users', getAllUsers)
router.get('/user', getDataUser)
router.post('/user', createDataUser)
router.put('/user', updateDataUser)
router.delete('/user', deleteDataUser)

module.exports = router
