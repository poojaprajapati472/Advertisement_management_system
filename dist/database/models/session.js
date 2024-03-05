"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const user_1 = __importDefault(require("./user"));
// import { FORCE } from 'sequelize/types/index-hints';
// import User from './user';
class Session extends sequelize_1.Model {
}
Session.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_1.default,
            key: "id",
        }
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    expire_at: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Session',
});
Session.sync();
Session.belongsTo(user_1.default, {
    foreignKey: "user_id",
});
exports.default = Session;
