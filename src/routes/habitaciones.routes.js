import { Router } from "express";
import {
  habitacionesDisponibles,
  listarHabitaciones,
  buscarHabitacionYActualizar,
  borrarHabitacion,
  listarHabitacion,
  nuevaHabitacion
} from "../controllers/habitacionesControllers.js";
import verificarToken from "../helpers/verificarJWT.js";
const router = Router();

router.route("/habitaciones").get(listarHabitaciones).post(nuevaHabitacion)
router.route("/habitacionesDisponibles").post(habitacionesDisponibles);
router.route("/habitaciones/:id").put([verificarToken],buscarHabitacionYActualizar).delete([verificarToken],borrarHabitacion).get(listarHabitacion);
export default router;
