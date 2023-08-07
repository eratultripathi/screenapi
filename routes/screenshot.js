import express  from "express"
import {getEmployeeScreen} from "../controllers/employeescreen.js";
const router = express.Router();


router.get("/screenshort",getEmployeeScreen);


export default router;