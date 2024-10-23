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