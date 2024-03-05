import { Request,Response } from "express";
import User from "../database/models/user";
export const update_user=async(req:Request,res:Response)=>{
      const {user_id}=req.body;
      const{username,email,name}=req.body;
      try {
        const user = await User.findByPk(user_id);
    
        if (!user){
          return res.status(404).json({ error: 'User not found.' });
        }
        user.username = username;
        user.email = email;
        user.name=name;
        await user.save();
        res.json({ success: true, user });
    }
    catch(error)
    {
        res.status(400).json("error occoured");
    }
}