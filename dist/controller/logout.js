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
exports.log_out = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const session_1 = __importDefault(require("../database/models/session"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from 'redis';
// const client = createClient();
// client.on('error', err => console.log('Redis Client Error', err));
// client.connect();
const client = new ioredis_1.default({
    host: '192.168.2.160',
    port: 6379,
});
const log_out = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    console.log(authorization);
    // if (!authorization || !authorization.startsWith('Bearer ')) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }
    const token = authorization.split(' ')[1];
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, 'pooja');
        const user_id = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.userId;
        // let decode = JSON.parse(JSON.stringify(jwt.verify(token,'pooja')));
        // const user_id : number = decode.user.id;
        console.log("userID:", user_id);
        yield client.del(JSON.stringify(user_id));
        yield session_1.default.destroy({ where: { id: user_id } });
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'An error occurred during logout' });
    }
});
exports.log_out = log_out;
