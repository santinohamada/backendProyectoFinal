import Usuario from "../database/model/usuarios";
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