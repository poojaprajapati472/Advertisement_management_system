import { Request, Response }  from "express";
import User from "../database/models/user";
import Address from "../database/models/address";
export const add_address=async(req:Request,res:Response)=>{
     const {address_line1,address_line2,landmark,city,state,address_type,user_id,zip_code,country,status}=req.body;
     const user= await User.findOne({where:{id:user_id}})
     if (!user)
     {
        res.status(404).json("invalid user")
    
     }
    const add=new Address({
        address_line1,
        address_line2,
        landmark,
        city,
        state,
        address_type,
        user_id:user.id,
        zip_code,
        country,
        status

    })
    await add.save();
    res.status(201).json("address added");


}