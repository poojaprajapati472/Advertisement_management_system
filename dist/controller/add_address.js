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
exports.add_address = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const address_1 = __importDefault(require("../database/models/address"));
const add_address = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address_line1, address_line2, landmark, city, state, address_type, user_id, zip_code, country, status } = req.body;
    const user = yield user_1.default.findOne({ where: { id: user_id } });
    if (!user) {
        res.status(404).json("invalid user");
    }
    const add = new address_1.default({
        address_line1,
        address_line2,
        landmark,
        city,
        state,
        address_type,
        user_id: user.id,
        zip_code,
        country,
        status
    });
    yield add.save();
    res.status(201).json("address added");
});
exports.add_address = add_address;
