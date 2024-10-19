import Usuario from "../../src/database/model/usuarios.js"
import bcrypt from "bcrypt"

export const crearUsuario = async (req,res)=>{
    try {
        const {nombre, apellido, dni, email, password, domicilio} = req.body
        const saltos = bcrypt.genSaltSync(10)
        const passwordHasheado = bcrypt.hashSync(password,saltos)
        const usuarioNuevo = new Usuario({nombre,apellido,email,dni,password: passwordHasheado,domicilio})
        await usuarioNuevo.save()
        res.status(201).json({
            mensaje: "el usuario fue creado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo crear el usuario"
        })
    }
}

export const login = async (req,res)=>{
    try {
        const {dni,password} = req.body
        const usuarioExistente = Usuario.findOne({dni})
        if(!usuarioExistente){
            return res.status(400).json({mensaje: "correo o contraseña incorrecta"})
        }
        const passwordValido = bcrypt.compareSync(password, usuarioExistente.password)
        if(!passwordValido){
            return res.status(400).json({mensaje: "correo o contraseña incorrecta"})
        }
        res.status(200).json({mensaje: "los datos del usuario son correctos", usuarioExistente})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error, no se pudo consultar el usuario"})
    }
}