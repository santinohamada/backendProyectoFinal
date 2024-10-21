import { Router } from "express";
import { habitacionesDisponibles } from "../controllers/habitacionesControllers.js";
const router = Router()

router.route("/habitaciones")
router.route("/habitacionesDisponibles").post(habitacionesDisponibles)
export default router