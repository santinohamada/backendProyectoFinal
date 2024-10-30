import { Router } from "express";
import {
  habitacionesDisponibles,
  listarHabitaciones,
  buscarHabitacionYActualizar
} from "../controllers/habitacionesControllers.js";
const router = Router();

router.route("/habitaciones").get(listarHabitaciones);
router.route("/habitacionesDisponibles").post(habitacionesDisponibles);
router.route("/habitaciones/:id").put(buscarHabitacionYActualizar);
export default router;
