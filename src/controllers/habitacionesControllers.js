import Habitacion from "../database/model/habitacion.js";

export const habitacionesDisponibles = async (req, res) => {
  try {
    const fechas = {
      checkIn: new Date(req.body[0]),
      checkOut: new Date(req.body[1]),
    };
    const habitacionesDisponibles = await Habitacion.aggregate([
        {
          $lookup: {
            from: "reservas",
            localField: "numberRoom",
            foreignField: "roomNumber",
            as: "HabitacionesConReserva",
          },
        },
        {
          $match: {
            $or: [
              { HabitacionesConReserva: { $eq: [] } }, 
              {
                HabitacionesConReserva: {
                  $not: {
                    $elemMatch: {
                      $or: [
                        { checkIn: { $lt: fechas.checkOut, $gte: fechas.checkIn } }, 
                        { checkOut: { $gt: fechas.checkIn, $lte: fechas.checkOut } }, 
                        { checkIn: { $lte: fechas.checkIn }, checkOut: { $gte: fechas.checkOut } } // Reserva cubre todo el rango
                      ]
                    }
                  }
                }
              }
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
