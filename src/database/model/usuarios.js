import mongoose, {Schema} from "mongoose";

const usuarioSchema =  new Schema({
    nombre:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        },
    apellido:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        },
    email:{
        type: String,
        required: true,
        validate: {
            validator: (value)=>{
                return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)
            },
        unique: true
    }},
    dni:{
        type: Number,
        required: true,
        minLength: 5,
        maxLength: 8,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength:8,
        maxLength:100,
        validate:{
            validator: (value)=>{
                return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/.test(value)
            }
        },
        trim:true,
    },
    domicilio:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario