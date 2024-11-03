import mongoose from "mongoose";

const habitacionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  roomNumber: { type: Number, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: Number, required: false },
  bed: { type: Number, required: true },
  taxes: { type: Number, required: false },
  breakfast: { type: Boolean, required: true },
  include: { type: String, required: true },
});

const Habitacion = mongoose.model("Habitacion", habitacionSchema);

export default Habitacion;
