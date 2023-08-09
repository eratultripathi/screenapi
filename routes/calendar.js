import express from "express";
import {postCalendar,getCalendar } from "../controllers/calendar.controller.js";
const router = express.Router();

router.post("/event",postCalendar);
router.get("/event",getCalendar);



export default router;
