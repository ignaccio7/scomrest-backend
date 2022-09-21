import { getConnection } from '../database/database.js';

const getPlatos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select xpro.nombre,xpla.ciudadProv,xpro.descripcion,xpro.precio from producto xpro,plato xpla where xpro.idProducto=xpla.idProducto");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getPlato = async (req, res) => {
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result = await connection.query("select xpro.nombre,xpla.ciudadProv,xpro.descripcion,xpro.precio from producto xpro,plato xpla where xpro.idProducto=xpla.idProducto and xpla.idProducto=?", idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getPlatos,
    getPlato
};