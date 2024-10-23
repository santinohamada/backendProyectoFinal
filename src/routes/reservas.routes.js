import { Router } from "express";
import { listarReservas, obtenerReserva } from "../controllers/reservasControllers.js";
const router = Router()

router.route("/reservas").get(listarReservas)
router.route("/reservas/:id").get(obtenerReserva)
export default router