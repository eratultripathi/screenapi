import express from "express";
import {getEmployeeProjectTask} from "../controllers/employeeprojecttask.controller.js";
const router = express.Router();


router.get("/employee/task",getEmployeeProjectTask  );



export default router;