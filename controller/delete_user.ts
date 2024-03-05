import { Request,Response } from "express";
import User from "../database/models/user";
export const del_user=async(req:Request,res:Response)=>{
    const user = req.body;
    const x = user.user_id;
    console.log(x)
    console.log("hii")
    try{
        const result=await User.destroy({where:{ id:x}});
        console.log("hello")
        res.status(200).json({ msg: "Account successfully deleted!" ,result})

    }catch(error)
    {
        res.status(400).json("error occuring")
    } 
}













//     try{
//         const user_id= req.body;
//         const user=await User.findByPk(user_id);
//         if(!user)
//         {
//             res.json("user not found");
//         }
//         await user.destroy();
//     res.json({ success: true, message: 'User deleted successfully.' })
//     }
//     catch(error)
//     {
//         res.status(500).json("server error occured");
//     }
// }
