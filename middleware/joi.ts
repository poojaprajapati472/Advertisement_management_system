import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const signUpSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    // address: Joi.string().required(),
    profile: Joi.string(),
    gender: Joi.string(),
    dob: Joi.date(),
    mobile:Joi.string(),
    status:Joi.string()
});

export const JoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};