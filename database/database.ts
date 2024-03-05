const Sequelize = require('sequelize');
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS,{
    host : process.env.DB_HOST,
    dialect : process.env.DB_DIALECT,

    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    },
});

export const dbconnection = async () =>{
    try{
        const msgOnConnect = await sequelize.authenticate();
    console.log('Database is connected to Server');
}catch(error)
    {
    console.log('Unable to connect',error);
    }
}