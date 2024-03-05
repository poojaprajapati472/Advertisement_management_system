'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class update - Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  update - Address.init({
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    landmark: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address_type: DataTypes.STRING,
    user_id: DataTypes.NUMBER,
    zip_code: DataTypes.NUMBER,
    country: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'update-Address',
  });
  return update - Address;
};