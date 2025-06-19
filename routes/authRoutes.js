import express from "express";
import { getUserProfile, loginuser, signupuser, updateUser } from "../controllers/userController.js";
import { userCheck } from "../middlewares/authCheck.js";
import { userLogout } from "../controllers/userController.js";
import Joi from "joi";
import validator from "express-joi-validation";

const validate = validator.createValidator({});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required()
});

const signupSchema = Joi.object({
  fullname: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required()
});


const router = express.Router();
router.route('/login').post(validate.body(loginSchema), loginuser);
router.route('/signup').post(validate.body(signupSchema), signupuser);
router.route('/update').patch(userCheck, updateUser);
router.route('/profile').get(userCheck, getUserProfile);

router.route('/logout').post(userLogout);

export default router;