import express from "express";
import { loginuser, signupuser } from "../controllers/userController.js";
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
router.route('/users/login').post(validate.body(loginSchema), loginuser);
router.route('/users/signup').post(validate.body(signupSchema), signupuser);
export default router;