import { Request, Response } from 'express';
import { createClient } from 'redis';
import jwt, {JwtPayload} from 'jsonwebtoken';
import User from '../database/models/user';
import Session from '../database/models/session';
import user from '../database/models/user';
import Redis from 'ioredis';
// import { createClient } from 'redis';
// const client = createClient();
// client.on('error', err => console.log('Redis Client Error', err));
// client.connect();
const client = new Redis({
  host: '192.168.2.160',
  port: 6379,
});

export const log_out = async (req: Request, res: Response) =>{
    const {authorization}=req.headers;
    console.log(authorization);
    // if (!authorization || !authorization.startsWith('Bearer ')) {
    
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }
    const token = authorization.split(' ')[1];
    
   try {
    const decodedToken = <JwtPayload>jwt.verify(token, 'pooja');
    const user_id : number = decodedToken?.userId;
    // let decode = JSON.parse(JSON.stringify(jwt.verify(token,'pooja')));
    // const user_id : number = decode.user.id;
    console.log("userID:", user_id)

    await client.del(JSON.stringify(user_id));
    await Session.destroy({ where: { id: user_id } });

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'An error occurred during logout' });
  }
};