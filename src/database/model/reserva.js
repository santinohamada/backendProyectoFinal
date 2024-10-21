import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    userId: {type:Number,required:true},
    roomId: { type:Number,required:true}, 
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true }
});

const Reservas = mongoose.model('Reservas', reservaSchema);

export default Reservas;
