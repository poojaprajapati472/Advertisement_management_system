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
exports.del_user = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const del_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const x = user.user_id;
    console.log(x);
    console.log("hii");
    try {
        const result = yield user_1.default.destroy({ where: { id: x } });
        console.log("hello");
        res.status(200).json({ msg: "Account successfully deleted!", result });
    }
    catch (error) {
        res.status(400).json("error occuring");
    }
});
exports.del_user = del_user;
//     try{
//         const user_id= req.body;
//         const user=await User.findByPk(user_id);
//         if(!user)
//         {
//             res.json("user not found");
//         }
//         await user.destroy();
//     res.json({ success: true, message: 'User deleted successfully.' })
//     }
//     catch(error)
//     {
//         res.status(500).json("server error occured");
//     }
// }
