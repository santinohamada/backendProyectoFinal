import Usuario from "../../src/database/model/usuarios.js";
import bcrypt from "bcrypt";
import generarToken from "../helpers/generarJWT.js";
export const verificarAdmin = async (req, res) => {
  try {
    const { rol } = req.user;

    if (rol !== true) {
      return res
        .status(200)
        .json({ mensaje: "No tiene permisos de administrador", rol: false });
    }

    res.status(200).json({ mensaje: "El usuario es administrador", rol: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al verificar el administrador" });
  }
};
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

    const passwordValido = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );
    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña incorrecta" });
    }
    const token = await generarToken(
      usuarioExistente._id,
      usuarioExistente.email,
      usuarioExistente.dni,
      usuarioExistente.rol
    );

    res.status(200).json({
      mensaje: "Los datos del usuario son correctos",
      usuario: usuarioExistente,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo consultar el usuario" });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
   
    if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
    const arrayUsuarios = await Usuario.find();
    res.status(200).json(arrayUsuarios);
  } catch (error) {
    res.status(404).json({
      mensaje: "Ocurrio un error, no se encontraron los usuarios",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "El usuario no fue encontrado" });
    }

    res.status(200).json(usuarioBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo obtener el usuario",
    });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
    const usuarioBuscado = await Usuario.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "El usuario no fue encontrado" });
    }

    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El usuario fue eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar un producto" });
  }
};
export const editarUsuario = async (req,res) =>{
  if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
  try{
    const usuarioBuscado = await Usuario.findById(req.params.id)
    if (!usuarioBuscado){
      return res.status(404).json({mensaje: 'El usuario no se pudo encontrar'})
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje: 'El usuario fue encontrado exitosamente'})
  }catch (error) {
    res.status(500).json({mensaje: 'Ocurrior un error al intentar editar el usuario'})
  }
}