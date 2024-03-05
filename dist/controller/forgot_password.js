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
exports.forgot_password = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const ioredis_1 = __importDefault(require("ioredis"));
const client = new ioredis_1.default({
    host: '192.168.2.160',
    port: 6379,
});
const forgot_password = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp, new_password } = req.body;
    if (otp == (yield client.get(`${email}_session`))) {
        // console.log("otp verified")
        res.json("otp verified");
        const user = yield user_1.default.findOne({ where: { email } });
        console.log(user);
        user.password = new_password;
        yield user.save();
    }
    else {
        res.status(404).json("otp didnot mattch");
    }
});
exports.forgot_password = forgot_password;
