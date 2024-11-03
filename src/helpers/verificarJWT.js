import jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {
  try {
    const token = req.header("X-Token");

    if (!token)
      return res.status(401).json({ mensaje: "No hay token"});

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.error("Error al verificar el token");
    switch (error.name) {
      case "JsonWebTokenError":
        return res.status(401).json({ mensaje: "Token inválido" });
      case "TokenExpiredError":
        return res.status(401).json({ mensaje: "El token ha expirado" });
      default:
        return res.status(500).json({ mensaje: "Error al verificar el token" });
    }
  }
};
export default verificarToken