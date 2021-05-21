require('dotenv').config()
const asyncHandler = require('../middleware/asyncHandler')

const {
  DB_TABLES: { DB_USERS, DB_JOBS },
} = require('../lib/const')

const sequelize = require('sequelize')
const { Op } = sequelize

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const { filter_by_name, filter_by_job } = req.query

  let specifiedQuery = {
    where: {},
  }

  let jobQuery = {
    where: {},
  }

  if (filter_by_name) {
    specifiedQuery.where['fullName'] = {
      [Op.iLike]: `%${filter_by_name.toLowerCase()}%`,
    }
  }
  if (filter_by_job) {
    jobQuery.where['name'] = {
      [Op.iLike]: `%${filter_by_job.toLowerCase()}%`,
    }
  }

  const users = await DB_USERS.findAll({
    include: [
      {
        model: DB_JOBS,
        as: 'job',
        ...jobQuery,
      },
    ],
    ...specifiedQuery,
  })

  let data = {
    sumOfUsers: 0,
    users: [],
  }

  if (users) {
    data.sumOfUsers = users.length
    data.users = users.map((user) => {
      return {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        job: user.job.name,
      }
    })
  }

  res.jsend.success(data)
})

exports.getDataUser = asyncHandler(async (req, res, next) => {
  const { user_id } = req.query

  const user = await DB_USERS.findOne({
    where: {
      id: user_id,
    },
    include: [
      {
        model: DB_JOBS,
        as: 'job',
      },
    ],
  })

  let data
  if (user) {
    data = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      job: user.job.name,
    }
  } else {
    return res.status(400).jsend.error({
      message: 'User not found',
    })
  }

  res.jsend.success(data)
})

exports.createDataUser = asyncHandler(async (req, res, next) => {
  const { full_name, email, job_id } = req.body

  const cekEmail = await DB_USERS.findOne({
    where: {
      email: email,
    },
  })

  if (!cekEmail) {
    try {
      const createUser = await DB_USERS.create({
        fullName: full_name,
        email: email,
        jobsId: job_id,
      })

      res.jsend.success({
        message: 'User has been created.',
      })
    } catch (error) {
      return res.status(400).jsend.error({
        message: 'Failed! User has not been created.',
      })
    }
  } else {
    return res.status(400).jsend.error({
      message: 'Email already exist.',
    })
  }
})

exports.updateDataUser = asyncHandler(async (req, res, next) => {
  const { user_id, full_name, email, job_id } = req.body

  const findUser = await DB_USERS.findOne({
    where: {
      id: user_id,
    },
  })

  if (findUser) {
    try {
      ;(findUser.fullName = full_name),
        (findUser.email = email),
        (findUser.jobsId = job_id),
        await findUser.save()

      res.jsend.success({
        message: 'User has been updated.',
      })
    } catch (error) {
      return res.status(400).jsend.error({
        message: 'Something wrong.',
      })
    }
  }
})

exports.deleteDataUser = asyncHandler(async (req, res, next) => {
  const { user_id } = req.body

  const findUser = await DB_USERS.destroy({
    where: {
      id: user_id,
    },
  })

  res.jsend.success({
    message: 'User has been deleted.',
  })
})
