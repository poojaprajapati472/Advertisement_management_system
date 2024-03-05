import { dbconnection } from './database/database';
import path from 'path';
import express  from "express";
import * as dotenv from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';
// import { Op } from 'sequelize';
import User from './database/models/user';
import router from './routes/router';
import Address from './database/models/address';
import Session from './database/models/session';
import category from './database/models/catageory';
import product from './database/models/product';
import {Image} from './database/models/image';
// import user1 from './database/models/user1';
const bodyParser = require('body-parser');
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(express.json());

import YAML from 'yamljs';
const swaggerDocument = YAML.load(path.join(__dirname,'./swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT;
try{
dbconnection();
 new User;
 new Address;
 new Session;
 new category;
 new product;
 new Image;

} catch(error){
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

app.use('/api', router);

app.listen(port, ()=> {
    console.log(`listning at ${port}`);
})

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

