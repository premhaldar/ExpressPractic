import express from "express";

const router=express.Router();

import * as taskController from "../app/controllers/taskController.js"

router.post("/createTask",taskController.createTask); 
router.get("/readTask",taskController.readTask);
router.put("/updateTask",taskController.updateTask);
router.delete("/deleteTask",taskController.deleteTask);

export default router;