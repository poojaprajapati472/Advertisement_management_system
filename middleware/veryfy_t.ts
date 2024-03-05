import { NextFunction, Request,Response } from 'express';
import { any } from 'joi';
import jwt from 'jsonwebtoken';
export const verifyToken =async(req: Request, res: Response, next: NextFunction) => {
    const token =req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
              return res.status(401).json({ message: 'No token provided' });
    }
    await jwt.verify(token,'pooja',(err:jwt.VerifyErrors|null,user:any)=>{
        if (err){
            return res.status(403).json("invalid");
        }
        // console.log("===============token ===============",g);
    next();
    });
};














// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization?.split(' ')[0]; 
//     console.log(token)
    
//     if (!token) {
//       return res.status(401).json({ message: 'No token provided' });
//     }
    
//     try {

//       const decoded = jwt.verify(token,'pooja'); 
//     //   req.user:any = decoded; 
//     //   res.json( (<any>req).user )
//       console.log(decoded);
//       next(); 
//     } catch (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }
//   };