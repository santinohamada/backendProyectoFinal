import Usuario from "../../src/database/model/usuarios.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, dni, email, rol, password, domicilio } = req.body;

    const saltos = bcrypt.genSaltSync(10);
    const passwordHasheado = bcrypt.hashSync(password, saltos);
    const usuarioNuevo = new Usuario({
      nombre,
      apellido,
      email,
      dni,
      rol,
      password: passwordHasheado,
      domicilio,
    });
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "el usuario fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { dni, email, password } = req.body;

    if (!dni && !email) {
      return res.status(400).json({ mensaje: "DNI o correo son necesarios" });
    }

    let usuarioExistente;

    if (dni) {
      usuarioExistente = await Usuario.findOne({ dni });
    }

    if (!usuarioExistente && email) {
      usuarioExistente = await Usuario.findOne({ email });
    }

    if (!usuarioExistente) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña incorrecta" });
    }

    // Verificar la contraseña solo si el usuario fue encontrado
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );
    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña incorrecta" });
    }

    // Si todo está bien, enviar respuesta con los datos del usuario
    res
      .status(200)
      .json({
        mensaje: "Los datos del usuario son correctos",
        usuario: usuarioExistente,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo consultar el usuario" });
  }
};
