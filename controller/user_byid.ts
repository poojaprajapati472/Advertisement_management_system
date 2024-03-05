import { Request,Response } from "express";
import User from "../database/models/user";
export const user_by_id= async(req:Request,res:Response)=>{
    try{
        const {user_id}=req.body;
        const user = await User.findByPk(user_id);
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
        res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user profile.' });
    }
        

}
    