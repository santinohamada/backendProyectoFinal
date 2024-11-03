import jwt from "jsonwebtoken";

export const generarToken = async (id, dni, email, rol) => {
  try {
    const payload = { id, dni, email, rol };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    console.error("Error al generar el token:", error.message);
    throw new Error("No se pudo generar el token");
  }
};

export default generarToken;
