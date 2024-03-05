import { Response,Request } from "express";
import bcrypt from 'bcrypt';
import User from "../database/models/user";
import Redis from "ioredis";
const client = new Redis({
    host: '192.168.2.160',
    port: 6379,
  });
export const forgot_password=async(req:Request,res:Response)=>{
    const {email,otp,new_password}=req.body;
    if (otp==await client.get(`${email}_session`))
    {
    // console.log("otp verified")
    res.json("otp verified")
    const user =await User.findOne({where:{email}})
    console.log(user)
    user.password=new_password;
    await user.save();
    }
    else{
        res.status(404).json("otp didnot mattch");
    }
}