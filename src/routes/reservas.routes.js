import { Router } from "express";
import {
  borrarReserva,
  listarReservas,
  obtenerReserva,
} from "../controllers/reservasControllers.js";
const router = Router();

router.route("/reservas").get(listarReservas);
router.route("/reservas/:id").get(obtenerReserva).delete(borrarReserva);
export default router;
