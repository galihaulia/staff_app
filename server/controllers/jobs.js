require('dotenv').config()
const asyncHandler = require('../middleware/asyncHandler')

const {
  DB_TABLES: { DB_JOBS },
} = require('../lib/const')

const sequelize = require('sequelize')
const { Op } = sequelize

exports.getAllJobs = asyncHandler(async (req, res, next) => {
  const { filter_by_name } = req.query

  let specifiedQuery = {
    where: {},
  }

  if (filter_by_name) {
    specifiedQuery.where['name'] = {
      [Op.iLike]: `%${filter_by_name.toLowerCase()}%`,
    }
  }

  const jobs = await DB_JOBS.findAll({
    ...specifiedQuery,
  })

  let data = {
    sumOfJobs: 0,
    jobs: [],
  }

  if (jobs) {
    data.sumOfJobs = jobs.length
    data.jobs = jobs.map((job) => {
      return {
        id: job.id,
        name: job.name,
      }
    })
  }

  res.jsend.success(data)
})

exports.createDataJob = asyncHandler(async (req, res, next) => {
  const { job_name } = req.body

  try {
    const createJob = await DB_JOBS.create({
      name: job_name,
    })

    res.jsend.success({
      message: 'Job has been created.',
    })
  } catch (error) {
    return res.status(400).jsend.error({
      message: 'Failed! Job has not been created.',
    })
  }
})

exports.updateDataJob = asyncHandler(async (req, res, next) => {
  const { job_id, job_name } = req.body

  const findJob = await DB_JOBS.findOne({
    where: {
      id: job_id,
    },
  })

  if (findJob) {
    try {
      findJob.name = job_name
      await findJob.save()

      res.jsend.success({
        message: 'Job has been updated.',
      })
    } catch (error) {
      return res.status(400).jsend.error({
        message: 'Something wrong.',
      })
    }
  }
})

exports.deleteDataJob = asyncHandler(async (req, res, next) => {
  const { job_id } = req.body

  const findJob = await DB_JOBS.destroy({
    where: {
      id: job_id,
    },
  })

  res.jsend.success({
    message: 'Job has been deleted.',
  })
})
