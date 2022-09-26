import { getConnection } from '../database/database.js';

const getPedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}


export const metodos = {
    getPedidos,
};