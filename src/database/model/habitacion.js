import mongoose,{Schema} from "mongoose";

const HabitacionSchema = new Schema({
    
    type: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    nights: { type: Number, required: true }, 
    capacity: { type: Number, required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true },
    size: { type: Number, required: true }, 
    bed: { type: Number, required: true }, 
    taxes: { type: Number, required: true }, 
    breakfast: { type: Boolean, required: true },
    include: { type: String, required: true }

})

const Habitacion = mongoose.model("Habitacion",HabitacionSchema)
export default Habitacion