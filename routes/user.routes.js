import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, getPage } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from '../middlewares/multer.middleware.js'
const router = Router();
router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    registerUser
)

router.route("/home").get(getCurrentUser)
router.route("/login").post(loginUser)
router.route("/getPage").get(getPage)
//securd routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router
