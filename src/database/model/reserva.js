import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    reservationName: { type: String, required: true }, 
    roomId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Room' }, // ID de la habitación, referencia al modelo Room
    checkIn: { type: Date, required: true }, 
    checkOut: { type: Date, required: true } 
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;