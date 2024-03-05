// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../database/models/user';
// const secretKey = "pooja";

// export async function createToken(req:Request){

//     const key = secretKey
//     const data = await User.findOne({
//         where : [Op.and] :
//     })
//     const token = jwt.sign({userId:req.body.id}, secretKey, { expiresIn:"1h"});
//     return token
// }