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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    yield jsonwebtoken_1.default.verify(token, 'pooja', (err, user) => {
        if (err) {
            return res.status(403).json("invalid");
        }
        // console.log("===============token ===============",g);
        next();
    });
});
exports.verifyToken = verifyToken;
// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization?.split(' ')[0]; 
//     console.log(token)
//     if (!token) {
//       return res.status(401).json({ message: 'No token provided' });
//     }
//     try {
//       const decoded = jwt.verify(token,'pooja'); 
//     //   req.user:any = decoded; 
//     //   res.json( (<any>req).user )
//       console.log(decoded);
//       next(); 
//     } catch (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }
//   };
