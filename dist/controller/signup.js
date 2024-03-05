"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_signUp = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import { JoiMiddleware } from "../middleware/joi";
const user_signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, username, email, dob, gender, mobile, password, status, profile } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_1.default.create({
            id,
            name, username,
            email,
            dob,
            gender,
            mobile,
            password: hashedPassword,
            status,
            profile
        });
        // const user = new User({ id,name,username, email,dob,gender,mobile, password:hashedPassword,status,profile});
        console.log("lshdflvnd");
        // await user.save();
        console.log(user);
        res.status(201).json({ message: 'User created successfully!', user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user.' });
    }
});
exports.user_signUp = user_signUp;
