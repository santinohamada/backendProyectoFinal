import { Router } from "express";
import validacionUsuario from "../helpers/validacionUsuarios.js"
import { crearUsuario, login, listarUsuarios, verificarAdmin } from "../controllers/usuarioControllers.js";

const usuarioRouter = Router()

usuarioRouter
  .route("/usuarios")
  .post([validacionUsuario], crearUsuario)
  .get(listarUsuarios);
usuarioRouter
  .route("/login")
  .post(login)
usuarioRouter
  .route("/verificarAdmin")
  .post(verificarAdmin)
  


export default usuarioRouter