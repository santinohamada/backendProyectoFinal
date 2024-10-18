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
    domicilio:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario