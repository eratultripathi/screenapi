import express from "express";
import {postProjectTask, getProjectTask,deteteProjectTask,patchProjectTask} from "../controllers/ProjectTask.controller.js";
const router = express.Router();

router.post("/task",postProjectTask);
router.get("/task",getProjectTask);
router.delete("/task/:id",deteteProjectTask);
router.patch("/task/:id",patchProjectTask);


export default router;