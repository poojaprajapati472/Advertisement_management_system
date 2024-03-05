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
exports.update_user = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const update_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.body;
    const { username, email, name } = req.body;
    try {
        const user = yield user_1.default.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        user.username = username;
        user.email = email;
        user.name = name;
        yield user.save();
        res.json({ success: true, user });
    }
    catch (error) {
        res.status(400).json("error occoured");
    }
});
exports.update_user = update_user;
