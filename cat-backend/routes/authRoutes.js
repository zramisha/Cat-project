import express from "express";
import { loginController, signupController, updatePassword } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


// router object ..//
const router = express.Router();


//routes ....
router.post('/login', loginController)

router.post('/signup', signupController)
router.patch('/update-password', authMiddleware, updatePassword)


export default router;