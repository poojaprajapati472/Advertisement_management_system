"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database/database");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
// import { Op } from 'sequelize';
const user_1 = __importDefault(require("./database/models/user"));
const router_1 = __importDefault(require("./routes/router"));
const address_1 = __importDefault(require("./database/models/address"));
const session_1 = __importDefault(require("./database/models/session"));
const catageory_1 = __importDefault(require("./database/models/catageory"));
const product_1 = __importDefault(require("./database/models/product"));
const image_1 = require("./database/models/image");
// import user1 from './database/models/user1';
const bodyParser = require('body-parser');
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
app.use(bodyParser.json());
dotenv.config();
app.use(express_1.default.json());
const yamljs_1 = __importDefault(require("yamljs"));
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
const port = process.env.PORT;
try {
    (0, database_1.dbconnection)();
    new user_1.default;
    new address_1.default;
    new session_1.default;
    new catageory_1.default;
    new product_1.default;
    new image_1.Image;
}
catch (error) {
    console.log("Internal Server Error, Failed to connect to Database", error);
}
//swagger
// const options={
//     definition:{
//       openapi :'3.0.0',
//       info:{
//         title: 'Node API on OLX',
//         version:'1.0.0'
//       },
//       servers:[
//         {
//           url :' http://localhost:3000'
//         }
//       ]
//     },
//     apis:['./routes/router.ts']
//   }
//   const swaggerSpec= swaggerJsdoc(options)
//   app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
///
app.use('/api', router_1.default);
app.listen(port, () => {
    console.log(`listning at ${port}`);
});
// app.get('/s',(req,res)=>{
//   // const data= req.body;
//   // User.create(data);
//   res.json("jhkbjk")
// })
// import express, { Response } from 'express';
// import jwt from 'jsonwebtoken';
// import { Sequelize, Model, DataTypes } from 'sequelize';
// import { Request } from 'express';
// import { Op } from 'sequelize';
// const app = express();
// const sequelize = new Sequelize('mydb', 'postgres', '    ', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });
// (async function (){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })()
// class User extends Model {
//     public id!: number;
//     public name!:string;
//     public age!:number;
//     public username!: string;
//     public password!: string;
//     // static followers: any;
//     // static following: any;
//     // static id: any;
//     // static username: any;
//   }
//   User.init(
//       {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//           type: DataTypes.STRING,
//           allowNull:false
//         },
//       age: {
//         type: DataTypes.INTEGER,
//         allowNull:false
//       },
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       timestamps:true,
//       tableName: 'users',
//     }
//     );
// User.sync({ force: true});
// class follower extends Model {
//     public id!: number;
//     public follow_id!: string;
//     public follower_id!: string;
// }
// follower.init(
//     {
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },
//         follow_id: {
//           type: DataTypes.INTEGER,
//           allowNull : false,
//           references:{
//          model:User,
//           key: 'id'
//         },
//         },
//         follower_id: {
//           type: DataTypes.INTEGER,
//           allowNull : false,
//           references:{
//             model:User,
//              key: 'id'
//         }
//         },
//       },
//       {
//         sequelize,
//         timestamps:false,
//         tableName: 'followers',
//       }
//     );
// follower.sync({force: false});
// app.use(express.json());
// //signup users 
// app.post('/signup', async (req:Request, res:Response) => {
//   const { name,age,username, password } = req.body;
//   const user = await User.create({ name,age,username, password });
//   const userId = user.id;
//   const token = jwt.sign({ userId }, 'secret');
//   res.status(201).json({message : "User created"})
// });
// //login users
// const JWT_SECRET = 'your_secret_key'
// app.post('/login', async (req: Request, res: Response) => {
//     try {
//       const { username, password } = req.body;
//       const user = await User.findOne({ where: { username } });
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       // Compare the provided password with the stored password
//       if (password !== user.password) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const token = jwt.sign({ userId: user.id }, JWT_SECRET);
//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ message: 'Login failed' });
//     }
//   });
//   //fetching all the users
// app.get('/users',async(req:Request, res:Response)=>{
//     const active_user =await User.findAll()
//     console.log(active_user);
//     res.send(active_user);
// });
// // adding follower 
// app.post('/addfollower', async (req: Request, res: Response) => {
//     try {
//       const { userId } = req.body;
//       const { followerId } = req.body;
//       await User.findByPk(userId);
//       await User.findByPk(followerId);
//       if (!userId|| !followerId) {
//         return res.status(404).json({ message: 'not found either one of them' });
//       }
//       const newFollower = follower.build({
//         follow_id: userId,
//         follower_id: followerId
//       });
//       await newFollower.save();
//       res.status(200).json({ message: 'Follower added successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to add follower' });
//     }
//   });
//   app.get('/followers',async(req:Request, res:Response)=>{
//     const active_follower =await follower.findAll()
//     console.log(active_follower);
//     res.send(active_follower);
//   })
//   //deleteing the user by userid and followerid
//   app.delete('/users/:userId/followers/:followerId', async (req: Request, res: Response) => {
//     try {
//       const { userId, followerId } = req.params;
//       await User.findByPk(userId);
//       await User.findByPk(followerId);
//       if (!userId || !followerId) {
//         return res.status(404).json({ message: 'User or follower not found' });
//       }
//       await follower.destroy({
//         where: {
//           follow_id: userId,
//           follower_id: followerId,
//         },
//       });
//       res.status(200).json({ message: 'Follower removed successfully' });
//     } catch (error) {
//       console.error('Error removing follower:', error);
//       res.status(500).json({ message: 'Failed to remove follower' });
//     }
//   });
//   //get user profile by name 
//   app.get('/userbyname', async (req: Request, res: Response) => {
//     try {
//       // Find users matching the search query
//       const users = await User.findAll({
//         where: {
//           username: {
//             [Op.like]: `%${req.body.name}%`,
//           },
//         },
//       });
//       res.status(200).json(users);
//     } catch (error) {
//       console.error('Error searching users:', error);
//       res.status(500).json({ message: 'Failed to search users' });
//     }
//   });
// //get others user profile detsil///////////////
// app.get('/getuserprofile/:userId',async (req: Request, res: Response) => {
//     const userId = parseInt(req.params.id);
//   try {
//     const user = await User.findByPk(userId);
//     console.log(user)
//     if (!user) {
//         res.status(404).json('User not found');
//     } else {
//         const followerCount = await follower.count({ where: { follow_id:userId } });
//         const followingCount = await follower.count({ where: { followerId: userId } });
//         res.send({id: user.id, name:user.name,age: user.age,username:user.username, followerCount, followingCount});
//     }
//   } catch (error) {
//     res.status(500).json('Failed to fetch user profile');
//   }
// })
// app.listen(3000)
// export default sequelize;
