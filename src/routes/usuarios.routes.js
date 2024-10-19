import { Router } from "express";
import validacionUsuario from "../helpers/validacionUsuarios.js"
import { crearUsuario, login } from "../controllers/usuarioControllers.js";

const usuarioRouter = Router()

usuarioRouter
  .route("/")
  .post([validacionUsuario], crearUsuario)
  .get();
usuarioRouter
  .route("/login")
  .post(login)
  


export default usuarioRouter