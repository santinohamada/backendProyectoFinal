import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
const validacionUsuario =[
check('nombre')
.notEmpty()
.withMessage("El nombre no puede estar vacio")
.isLength({
    min: 3,
    max: 40
})
.withMessage("El nombre debe contener como minimo 3 caracteres y como maximo 40")
,check('apellido')
.notEmpty()
.withMessage("El apellido no puede estar vacio")
.isLength({
    min: 3,
    max: 40
})
.withMessage("El apellido debe contener como minimo 3 caracteres y como maximo 40")
,check('dni')
.notEmpty()
.withMessage("El dni no puede estar vacio")
.isLength({
    min: 5,
    max: 8
})
.isNumeric()
.withMessage("El dni debe contener solo numeros")
,check("email")
.notEmpty()
.withMessage("el email del usuario es un dato obligatorio")
.matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
.withMessage("el email debe tener el formato de un correo valido nombre@mail.com")
.isLength({
    min:10,
    max:100
})
.withMessage(
    "El mail debe contener como minimo 10 y como maximo 30"
),
check("password")
.notEmpty()
.withMessage("La contraseña es un dato obligatorio")
.isLength({
    min:8,
    max:100
})
.withMessage(
    "La contraseña es invalida"
)
.matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{5,8}$/)
.withMessage("La contraseña debe tener entre 5 y 8 caracteres, contener un digito, al menos una minuscula, al menos una mayuscula y al menos un caracter especial")
,check('domicilio')
.notEmpty()
.withMessage("El domicilio no puede estar vacio")
.isLength({
    min: 10,
    max: 50
})
.withMessage("El nombre debe contener como minimo 10 caracteres y como maximo 50"),

(req,res,next) => resultadoValidacion(req,res,next),
]
export default validacionUsuario;