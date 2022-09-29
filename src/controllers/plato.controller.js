import { getConnection } from '../database/database.js';

const getPlatos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto");
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
        const result = await connection.query("SELECT xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto and xpla.idProducto=?", idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getIngredientesPlato = async (req,res)=>{
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT xing.nombre,xing.tipo FROM contiene xcont,ingrediente xing WHERE xcont.idIng = xing.idIng  AND idProducto =?", idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addPlato = async (req, res) => {
    try {
        const { nombre,precio,descripcion,stock,ciudadProv,idProducto } = req.body;

        const producto={
            nombre,precio,descripcion,idProducto
        }
        const plato={
            stock,ciudadProv,idProducto
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO producto SET ?',producto);
        const result2 = await connection.query('INSERT INTO plato SET ?',plato);
        console.log(result);
        console.log(result2);
        res.json({message:"plato añadido"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getPlatos,
    getPlato,
    getIngredientesPlato,
    addPlato    
};