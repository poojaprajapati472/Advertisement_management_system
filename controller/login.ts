import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from "../database/models/user";
import Redis from "ioredis";

// import { createClient } from 'redis';
// const client = createClient();
// client.on('error', err => console.log('Redis Client Error', err));
// client.connect();
const client = new Redis({
  host: '192.168.2.160',
  port: 6379,
});

import { JoiMiddleware } from "../middleware/joi";
import Session from "../database/models/session";



export const log_in= async(req:Request,res:Response)=>{
    const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ message: 'not found' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         return res.status(401).json({ message: 'invalid' })
        }
      
        // const sessionsToCreate = 5;
        // const sessions = [];
        // try {
      
        // for (let i = 0; i < sessionsToCreate; i++) {

        //create session in database
        const session = await Session.create({
            user_id:user.id,
            status:"Active",
            expire_at:"1h"
        })
        await session.save();
        // console.log("========",session);
        //saving session in redis
        
        await client.set(JSON.stringify(user.id),'true');
        // await client.set(user,JSON.stringify('true'));
        // sessions.push(session);
        // res.json(sessions)
      // } // } catch (error) {
    //   console.error('Error creating session:', error);
    // }
   
    
        const token =jwt.sign({userId:user.id}, "pooja", { expiresIn:"1h"});
        res.send({token:token})
        res.status(200).json({ message: 'Login successful',token});
}
