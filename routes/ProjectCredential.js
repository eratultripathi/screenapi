import express from "express";
import {postProjectCredential, getProjectCredential,deteteProjectCredential,patchProjectCredential } from "../controllers/ProjectCredential.controller.js";
const router = express.Router();

router.post("/credential",postProjectCredential);
router.get("/credential",getProjectCredential);
router.delete("/credential/:id", deteteProjectCredential);
router.patch("/credential/:id",patchProjectCredential);



export default router;