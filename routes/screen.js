import express from "express";
import { getScreens,createScreen } from "../controllers/screen.js";

const router=express.Router();


router.route('/get').get(getScreens);
router.route('/create').post(createScreen);


export default router;
