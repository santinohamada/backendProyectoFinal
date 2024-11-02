import { Router } from "express";
import {
  habitacionesDisponibles,
  listarHabitaciones,
  buscarHabitacionYActualizar
} from "../controllers/habitacionesControllers.js";
import verificarToken from "../helpers/verificarJWT.js";
const router = Router();

router.route("/habitaciones").get([verificarToken],listarHabitaciones);
router.route("/habitacionesDisponibles").post([verificarToken],habitacionesDisponibles);
router.route("/habitaciones/:id").put(buscarHabitacionYActualizar);
export default router;
