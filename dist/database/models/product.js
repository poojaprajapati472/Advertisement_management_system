"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const user_1 = __importDefault(require("./user"));
const catageory_1 = __importDefault(require("./catageory"));
const address_1 = __importDefault(require("./address"));
class product extends sequelize_1.Model {
}
product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.BLOB),
    //   allowNull: true,
    // },
    Bidding: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Bidderid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    base_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        //  allowNull: false,
        references: {
            model: user_1.default,
            key: "id",
        }
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: catageory_1.default,
            key: "id",
        }
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: address_1.default,
            key: "id",
        }
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'product',
});
product.belongsTo(user_1.default, {
    foreignKey: "user_id",
});
product.belongsTo(catageory_1.default, {
    foreignKey: " category_id",
});
product.belongsTo(address_1.default, {
    foreignKey: "address_id",
}),
    product.sync({ alter: true });
exports.default = product;
