const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getDataJob,
  createDataJob,
  updateDataJob,
  deleteDataJob,
} = require('../controllers/jobs')

router.get('/jobs', getAllJobs)
router.post('/job', createDataJob)
router.put('/job', updateDataJob)
router.delete('/job', deleteDataJob)

module.exports = router
