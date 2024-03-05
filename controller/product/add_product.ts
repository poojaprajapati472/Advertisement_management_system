import { Request, Response }  from "express";
import User from "../../database/models/user";
import Address from "../../database/models/address";
import product from "../../database/models/product";
import category from "../../database/models/catageory";

export const add_product=async(req:Request,res:Response)=>{
    try{
    const {product_name,description,images,Bidding,base_price,title,user_id,address_id,category_id,Bidderid}=req.body;
    console.log(user_id)
    const user=await User.findOne({where:{id:user_id}});
    console.log("===========",user)
    const user_add=await Address.findOne({where:{user_id:user.dataValues.id}})
    console.log("=============pr",user_add)
    await product.create({
        product_name,
        description,
        images: [images],
        Bidding,
        base_price,
        title,
        user_id:user.dataValues.id,
        address_id:user_add.dataValues.id,
        category_id,Bidderid
    })
     res.status(201).json("created");
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json("error occured")

    }

}