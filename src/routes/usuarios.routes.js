import { Router } from "express";
const router = Router()

usuarioRouter
  .route("/")
  .post([validacionUsuario], crearUsuario)
  .get(listarUsuarios);
usuarioRouter
  .route("/login")
  .post(login)
  

router.route("/usuarios")
export default router