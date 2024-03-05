"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const user_1 = __importDefault(require("./user"));
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address_line1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address_line2: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_1.default,
            key: "id",
        }
    },
    zip_code: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Address',
});
Address.belongsTo(user_1.default, {
    foreignKey: "user_id"
});
user_1.default.hasMany(Address, { foreignKey: 'user_id' });
Address.sync();
exports.default = Address;
