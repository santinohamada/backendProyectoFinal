import { Router } from "express";
import { listarReservas } from "../controllers/reservasControllers.js";
const router = Router()

router.route("/reservas").get(listarReservas)
export default router