import Habitacion from "../database/model/habitacion.js";

export const habitacionesDisponibles = async (req, res) => {
  try {
    const fechas = {
      checkIn: new Date(req.body.checkIn),
      checkOut: new Date(req.body.checkOut),
    };
    console.log(fechas.checkIn);
    console.log(typeof fechas.checkIn);
    const habitacionesDisponibles = await Habitacion.aggregate([
      {
        $lookup: {
          from: "reservas",
          localField: "numberRoom",
          foreignField: "roomId",
          as: "HabitacionesConReserva",
        },
      },
      {
        $match: {
          $or: [
            { "HabitacionesConReserva.checkIn": { $gt: fechas.checkOut } },
            { "HabitacionesConReserva.checkOut": { $lt: fechas.checkIn } },
          ],
        },
      },
    ]);
    res.send(habitacionesDisponibles);
    return habitacionesDisponibles;
  } catch (error) {
    console.error(error);
  }
};

export const listarHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json({ habitaciones: habitaciones });
    return habitaciones;
  } catch (error) {}
};
