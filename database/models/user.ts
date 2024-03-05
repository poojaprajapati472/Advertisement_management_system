import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { dbconnection, sequelize } from '../database';
import Address from './address';

class User extends Model {
    public id!: number;
    public name!: string;
    // public age!:number;
    public username!: string;
    public email!: string;
    public dob!: Date;
    public gender!: string;
    public mobile!: bigint;
    public password!: string;
    public status!: boolean;
    public profile!: string;
    static req: any;
    private _id: any;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
            
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps:true,
        tableName: 'user',
    }
);
User.sync();
export default User;
