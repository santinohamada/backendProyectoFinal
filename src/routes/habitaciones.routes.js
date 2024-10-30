import { Router } from "express";
import {
  habitacionesDisponibles,
  listarHabitaciones,
  buscarHabitacion
} from "../controllers/habitacionesControllers.js";
const router = Router();

router.route("/habitaciones").get(listarHabitaciones);
router.route("/habitacionesDisponibles").post(habitacionesDisponibles);
router.route("/habitaciones/:id").get(buscarHabitacion);
export default router;
