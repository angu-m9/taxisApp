import express from "express";
import { getAllTaxis, createTaxi, deleteTaxi, updateTaxi, patchTaxi } from "../controllers/taxiController.js";

const router = express.Router();
router.get("/", getAllTaxis);
router.post("/", createTaxi);
router.delete("/:id", deleteTaxi);  
router.put("/:id", updateTaxi);     
router.patch("/:id", patchTaxi); 

export default router;
