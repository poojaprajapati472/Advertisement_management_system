import User from "../database/models/user";
import { Request, Response }  from "express";
import bcrypt from 'bcrypt';
// import { JoiMiddleware } from "../middleware/joi";
export const user_signUp = async (req: Request, res: Response) => {
    try{
    const { id,name,username, email,dob,gender,mobile, password,status,profile} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      id,
      name,username, 
      email,
      dob,
      gender,
      mobile, 
      password:hashedPassword,
      status,
      profile
    });

    // const user = new User({ id,name,username, email,dob,gender,mobile, password:hashedPassword,status,profile});
    console.log("lshdflvnd")
    // await user.save();
    console.log(user)
    res.status(201).json({ message: 'User created successfully!', user });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user.' });
 }
}