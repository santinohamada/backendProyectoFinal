import { Router } from "express";
import {
  habitacionesDisponibles,
  listarHabitaciones,
} from "../controllers/habitacionesControllers.js";
const router = Router();

router.route("/habitaciones").get(listarHabitaciones);
router.route("/habitacionesDisponibles").post(habitacionesDisponibles);
export default router;
