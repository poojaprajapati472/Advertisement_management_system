import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { dbconnection, sequelize } from '../database';
import User from './user';
// import { FORCE } from 'sequelize/types/index-hints';
// import User from './user';


class Session extends Model {
       
       user_id!:String;
       token!:string;
       status!:String;
       expire_at!:String;
    }

Session.init(
        {
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:User,
                key:"id",
            }
          },
          token: {
            type: DataTypes.STRING,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          expire_at:{
            type:DataTypes.STRING,
            allowNull:true,
          },
        },
        {
          sequelize,
          modelName: 'Session', 
     
        }
      );
        Session.sync();

    Session.belongsTo(User,{
        foreignKey:"user_id",
    })
export default Session;
    
