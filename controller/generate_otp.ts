import { Response,Request } from "express";
import bcrypt from 'bcrypt';
import User from "../database/models/user";
import Redis from "ioredis";
// import { createClient } from "redis";
// const client = createClient()
// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
const client = new Redis({
    host: '192.168.2.160',
    port: 6379,
  });
export const generate_otp=async(req:Request,res:Response)=>{
    const {email}=req.body;
    const user=await User.findOne({where:{email}})
    if(!user)
    {
        res.status(404).json("not found");
    }
    const otp=Math.floor(1000 + Math.random() * 9000);
    await client.set(`${email}_session`,otp);
    res.send({ Message:"generate otp successfully",otp});

    // res.status(200).json(user);


}