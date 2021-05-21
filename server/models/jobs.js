'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jobs.hasMany(models.Users, { foreignKey: 'jobsId', as: 'job' })
    }
  }
  Jobs.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Jobs',
    },
  )
  return Jobs
}
