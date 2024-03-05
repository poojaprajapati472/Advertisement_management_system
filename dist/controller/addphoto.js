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
exports.imageUpload = void 0;
const fs_1 = __importDefault(require("fs"));
// import storag
const image_1 = require("../database/models/image");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
// const upload = multer({ storage })
// import { fnStatic } from "sequelize";
const imageUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.files);
        const pid = req.query.pid; //there are two type of params query and path:)
        console.log(pid);
        const files = req.files;
        const bufferDataArray = [];
        for (const file of files) {
            const fileData = fs_1.default.readFileSync(file.path);
            console.log(file.path);
            const bufferData = Buffer.from(fileData);
            console.log('filedata');
            bufferDataArray.push(bufferData);
            console.log(bufferData);
        }
        const images = yield image_1.Image.create({ image: bufferDataArray, product_id: pid });
        console.log(images);
        res.status(201).json({ message: "Images registered successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.imageUpload = imageUpload;
