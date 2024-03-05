import multer from "multer"
import { Request } from "express";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req:Request, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
export {upload}