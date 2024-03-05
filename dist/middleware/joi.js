"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiMiddleware = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    // address: Joi.string().required(),
    profile: joi_1.default.string(),
    gender: joi_1.default.string(),
    dob: joi_1.default.date(),
    mobile: joi_1.default.string(),
    status: joi_1.default.string()
});
const JoiMiddleware = (req, res, next) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.JoiMiddleware = JoiMiddleware;
