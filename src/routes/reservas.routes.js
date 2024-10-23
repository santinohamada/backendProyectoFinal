import { Router } from "express";
import {
  borrarReserva,
  crearReserva,
  listarReservas,
  obtenerReserva,
} from "../controllers/reservasControllers.js";
const router = Router();

router.route("/reservas").get(listarReservas).post(crearReserva);
router.route("/reservas/:id").get(obtenerReserva).delete(borrarReserva);
export default router;
