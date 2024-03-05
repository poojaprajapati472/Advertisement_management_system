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
exports.add_product = void 0;
const user_1 = __importDefault(require("../../database/models/user"));
const address_1 = __importDefault(require("../../database/models/address"));
const product_1 = __importDefault(require("../../database/models/product"));
const add_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_name, description, images, Bidding, base_price, title, user_id, address_id, category_id, Bidderid } = req.body;
        console.log(user_id);
        const user = yield user_1.default.findOne({ where: { id: user_id } });
        console.log("===========", user);
        const user_add = yield address_1.default.findOne({ where: { user_id: user.dataValues.id } });
        console.log("=============pr", user_add);
        yield product_1.default.create({
            product_name,
            description,
            images: [images],
            Bidding,
            base_price,
            title,
            user_id: user.dataValues.id,
            address_id: user_add.dataValues.id,
            category_id, Bidderid
        });
        res.status(201).json("created");
    }
    catch (error) {
        console.log(error);
        res.status(500).json("error occured");
    }
});
exports.add_product = add_product;
