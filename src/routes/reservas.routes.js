import { Router } from "express";
import {
  borrarReserva,
  crearReserva,
  listarReservas,
  obtenerReserva,
} from "../controllers/reservasControllers.js";
import verificarToken from "../helpers/verificarJWT.js";
const router = Router();

router.route("/reservas").get([verificarToken],listarReservas).post([verificarToken],crearReserva);
router.route("/reservas/:id").get([verificarToken],obtenerReserva).delete([verificarToken],borrarReserva);
export default router;
