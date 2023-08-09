import express from "express";
const router = express.Router();

import {postLogin } from "../controllers/auth/postLogin.js";
import {postRegister} from "../controllers/auth/postRegister.js";
import Joi from 'joi'
import { createValidator } from 'express-joi-validation'
import auth from "../middleware/auth.js"

const validator = createValidator()


const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  postLogin
);

// test route to verify if our middleware is working
router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

export default router;
