import { Request, Response }  from "express";
import category from "../../database/models/catageory";
export const category_add= async (req:Request,res:Response)=>{
    const {category_name,subcategories}=req.body;
    await category.create({
        category_name,
        subcategories,
    })
    res.json("category added")
}
