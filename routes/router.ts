import express from "express";
import { user_signUp } from "../controller/signup";
import { getAllUsers } from "../controller/alluser";
import { JoiMiddleware } from "../middleware/joi";
import { log_in } from "../controller/login";
import { user_by_id } from "../controller/user_byid";
import { verifyToken } from "../middleware/veryfy_t";
import { del_user } from "../controller/delete_user";
import { update_user } from "../controller/update_p";
import { add_address } from "../controller/add_address";
import { add_product } from "../controller/product/add_product";
import { category_add } from "../controller/category/category";
import { log_out } from "../controller/logout";
import { generate_otp } from "../controller/generate_otp";
import { forgot_password } from "../controller/forgot_password";
import { bidding } from "../controller/product/bidding";
// import { add_profile_photos } from "../controller/addphoto";
import { upload } from "../middleware/multer";
import { imageUpload } from "../controller/addphoto";
// import { update } from "../controller/addphoto";
const router = express.Router();

router.post("/signup",JoiMiddleware, user_signUp);
router.post('/login',log_in);
router.get('/getall', getAllUsers);
router.get('/getbyid',verifyToken,user_by_id);
router.get('/delbyid',verifyToken,del_user)
router.put('/update_u',update_user);
router.post('/address',add_address);
router.post('/add_pro',add_product);
router.post('/category',category_add);
router.delete('/logout',log_out);
router.post('/gen_otp',generate_otp);
router.put('/forgot_password',forgot_password);
router.put('/bidding',bidding);
router.post('/imageUpload', upload.array('image', 5), imageUpload);
// router.put("/addprofile",upload.single('image'),verifyToken,add_profile_photos);
// app.put('/upload/photos',upload.single('image'),jwtMiddleware,add_profile_photos)

// router.post('/addphoto',update);


export default router;