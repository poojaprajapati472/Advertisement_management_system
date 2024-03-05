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
exports.generate_otp = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from "redis";
// const client = createClient()
// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
const client = new ioredis_1.default({
    host: '192.168.2.160',
    port: 6379,
});
const generate_otp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield user_1.default.findOne({ where: { email } });
    if (!user) {
        res.status(404).json("not found");
    }
    const otp = Math.floor(1000 + Math.random() * 9000);
    yield client.set(`${email}_session`, otp);
    res.send({ Message: "generate otp successfully", otp });
    // res.status(200).json(user);
});
exports.generate_otp = generate_otp;
