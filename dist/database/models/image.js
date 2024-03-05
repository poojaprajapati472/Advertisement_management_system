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
exports.Image = void 0;
const sequelize_1 = require("sequelize");
const product_1 = __importDefault(require("./product"));
// import { dbconnection } from '../database';
// import {Sequelize} from 'sequelize';
// import sequelize from 'sequelize';
const database_1 = require("../database");
class Image extends sequelize_1.Model {
}
exports.Image = Image;
Image.init({
    image_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: product_1.default,
            key: 'id'
        }
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Image',
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Image.sync({ alter: true });
}))();
