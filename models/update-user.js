'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class update - User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  update - User.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    mobile: DataTypes.BIGINT,
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'update-User',
  });
  return update - User;
};