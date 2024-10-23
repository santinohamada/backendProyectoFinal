import Reservas from "../../src/database/model/reserva.js"

export const listarReservas = async(req, res)=>{
    try {
        const reservas = await Reservas.find()
        res.status(200).json(reservas);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            mensaje:"Ocurrio un error, no se pudo listar las reservas"
        })
    }
}
export const obtenerReserva = async(req, res)=>{
    try {
        console.log(req.params.id)
        const reservaBuscada = await Reservas.findById(req.params.id)
        console.log(reservaBuscada)
        res.status(200).json(reservaBuscada)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje:"Ocurrio un error, no se pudo obtener la reserva"
        })
    }
}