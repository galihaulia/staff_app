'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Jobs, { foreignKey: 'jobsId', as: 'job' })
    }
  }
  Users.init(
    {
      fullName: DataTypes.STRING,
      jobsId: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    },
  )
  return Users
}
