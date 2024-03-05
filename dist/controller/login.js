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
exports.log_in = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../database/models/user"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from 'redis';
// const client = createClient();
// client.on('error', err => console.log('Redis Client Error', err));
// client.connect();
const client = new ioredis_1.default({
    host: '192.168.2.160',
    port: 6379,
});
const session_1 = __importDefault(require("../database/models/session"));
const log_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.default.findOne({ where: { username } });
    if (!user) {
        return res.status(404).json({ message: 'not found' });
    }
    const validPassword = yield bcrypt_1.default.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).json({ message: 'invalid' });
    }
    // const sessionsToCreate = 5;
    // const sessions = [];
    // try {
    // for (let i = 0; i < sessionsToCreate; i++) {
    //create session in database
    const session = yield session_1.default.create({
        user_id: user.id,
        status: "Active",
        expire_at: "1h"
    });
    yield session.save();
    // console.log("========",session);
    //saving session in redis
    yield client.set(JSON.stringify(user.id), 'true');
    // await client.set(user,JSON.stringify('true'));
    // sessions.push(session);
    // res.json(sessions)
    // } // } catch (error) {
    //   console.error('Error creating session:', error);
    // }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, "pooja", { expiresIn: "1h" });
    res.send({ token: token });
    res.status(200).json({ message: 'Login successful', token });
});
exports.log_in = log_in;
