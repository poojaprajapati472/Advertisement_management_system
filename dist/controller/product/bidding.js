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
exports.bidding = void 0;
// import User from "../../database/models/user";
// import Address from "../../database/models/address";
const product_1 = __importDefault(require("../../database/models/product"));
// import product from "../../database/models/product";
// import product from "../../database/models/product";
// import category from "../../database/models/catageory";
const bidding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bid_price, product_id, Bidder_id } = req.body;
    const product_DE = yield product_1.default.findOne({ where: { id: product_id } });
    console.log(product_DE);
    // res.json("succeesfully found product")
    if (bid_price <= product_1.default.Bidding) {
        res.status(404).json("bid price must be high");
    }
    else {
        product_DE.Bidding = bid_price,
            product_DE.Bidderid = Bidder_id;
        product_DE.save();
        res.json("bid id and bidding updated");
    }
});
exports.bidding = bidding;
