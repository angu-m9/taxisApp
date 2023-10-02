import express from "express";
import { getAllClientes, createCliente } from "../controllers/clienteController.js";

const router = express.Router();
router.get("/", getAllClientes);
router.post("/", createCliente);

export default router;