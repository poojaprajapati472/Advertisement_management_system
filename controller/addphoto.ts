import { Response,Request } from "express";
import User from "../database/models/user";
import fs from 'fs';
// import storag
import { Image } from "../database/models/image";
import multer from 'multer';
const storage = multer.memoryStorage(); 
// const upload = multer({ storage })


// import { fnStatic } from "sequelize";
export const imageUpload = async (req: Request, res: Response) => {
    try {
      console.log(req.files);
      const pid = req.query.pid;   //there are two type of params query and path:)
      console.log(pid)
      const files = req.files as Express.Multer.File[]; 
      const bufferDataArray: Buffer[] = [];
      
      
      

      for (const file of files) {
        const fileData = fs.readFileSync(file.path);
        
        console.log(file.path);
        const bufferData = Buffer.from(fileData);
        console.log('filedata')
        bufferDataArray.push(bufferData);
        console.log(bufferData);
      }
  
      const images = await Image.create({ image: bufferDataArray, product_id: pid });
      console.log(images);
      res.status(201).json({ message: "Images registered successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error" });
    }
  };



