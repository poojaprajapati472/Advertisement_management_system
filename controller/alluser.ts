import { Request, Response }  from "express";
import User from "../database/models/user";
export const getAllUsers = async(req:Request, res:Response)=>{
    try{
        const active_user =await User.findAll()
        console.log(active_user);
        res.send(active_user);
    }catch(error)
    {
        res.status(500).json("Error !!!");
    }
    };