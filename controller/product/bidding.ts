import { Request, Response } from "express";
// import User from "../../database/models/user";
// import Address from "../../database/models/address";
import product from "../../database/models/product";
// import product from "../../database/models/product";
// import product from "../../database/models/product";
// import category from "../../database/models/catageory";
export const bidding = async (req: Request, res: Response) => {
    const { bid_price, product_id, Bidder_id } = req.body;
    const product_DE = await product.findOne({ where: { id: product_id } })
    console.log(product_DE)
    // res.json("succeesfully found product")
    if (bid_price <= product.Bidding) {
        res.status(404).json("bid price must be high")

    } else {
        product_DE.Bidding = bid_price,
        product_DE.Bidderid = Bidder_id
        product_DE.save();

        res.json("bid id and bidding updated")
    }
}
