import { getConnection } from '../database/database.js';

const getBebidas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xbe.idProducto,xbe.marca,xbe.tipo,xbe.grado_alcoholico,xpro.nombre,xpro.descripcion,xpro.precio,xbe.image FROM bebida xbe, producto xpro WHERE xbe.idProducto = xpro.idProducto");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getBebidas, 
};