import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { dbconnection, sequelize } from '../database';
import User from './user';


class Address extends Model {
  address_line1!: String;
  address_line2!: String;
  landmark!: String;
  city!: String;
  state!: String;
  address_type!: String;
  user_id!: Number;
  zip_code!: Number;
  country!: String;
  status!: Boolean;
  id: any;
}

Address.init(

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address_line1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_line2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      }
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Address',

  }
);

Address.belongsTo(User,
  {
    foreignKey: "user_id"
  })
User.hasMany(Address, { foreignKey: 'user_id' });
Address.sync();
export default Address;