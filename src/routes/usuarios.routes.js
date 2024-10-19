import { Router } from "express";
import validacionUsuario from "../helpers/validacionUsuarios.js"
import { crearUsuario } from "../controllers/usuarioControllers.js";

const usuarioRouter = Router()

usuarioRouter
  .route("/")
  .post([validacionUsuario], crearUsuario)
  .get();
usuarioRouter
  .route("/login")
  .post()
  


export default usuarioRouter