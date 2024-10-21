import { Router } from "express";
import validacionUsuario from "../helpers/validacionUsuarios.js"
import { crearUsuario, login, listarUsuarios } from "../controllers/usuarioControllers.js";

const usuarioRouter = Router()

usuarioRouter
  .route("/usuarios")
  .post([validacionUsuario], crearUsuario)
  .get(listarUsuarios);
usuarioRouter
  .route("/login")
  .post(login)
  


export default usuarioRouter