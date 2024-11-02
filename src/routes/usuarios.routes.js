import { Router } from "express";
import validacionUsuario from "../helpers/validacionUsuarios.js";
import {
  crearUsuario,
  login,
  listarUsuarios,
  verificarAdmin,
  obtenerUsuario,
  borrarUsuario,
} from "../controllers/usuarioControllers.js";
import  verificarToken  from "../helpers/verificarJWT.js";

const usuarioRouter = Router();

usuarioRouter
  .route("/usuarios")
  .post([validacionUsuario], crearUsuario)
  .get([verificarToken],listarUsuarios);
usuarioRouter.route("/login").post(login);
usuarioRouter.route("/verificarAdmin").post([verificarToken],verificarAdmin);

usuarioRouter.route("/usuarios/:id").get([verificarToken],obtenerUsuario).delete([verificarToken],borrarUsuario);

export default usuarioRouter;
