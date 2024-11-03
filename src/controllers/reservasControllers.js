import Reservas from "../../src/database/model/reserva.js";

export const listarReservas = async (req, res) => {
  if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
  try {
    const reservas = await Reservas.find();
    res.status(200).json(reservas);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Ocurrio un error, no se pudo listar las reservas",
    });
  }
};
export const obtenerReserva = async (req, res) => {
  try {
    const reservaBuscada = await Reservas.findById(req.params.id);
    if (!reservaBuscada) {
      return res.status(404).json({
        mensaje: "Reserva no encontrada",
      });
    }
    
    res.status(200).json(reservaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo obtener la reserva",
    });
  }
};

export const borrarReserva = async (req, res) => {
  if(!req.user.rol) return res.status(401).send("No posee los suficientes permisos para realizar esta operacion")
  try {
    const reservaBuscada = await Reservas.findById(req.params.id);
    if (!reservaBuscada) {
      return res.status(404).json({
        mensaje: "La reserva no fue encontrada",
      });
    }
    await Reservas.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La reserva fue eliminada correctamente",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar una reserva" });
  }
};
export const crearReserva = async (req, res) => {
  try {
    
    const nuevaReserva = new Reservas(req.body);
    await nuevaReserva.save();
    res.status(200).json({ nuevaReserva });
    return nuevaReserva;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};