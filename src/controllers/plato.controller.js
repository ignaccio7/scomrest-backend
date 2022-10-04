import { getConnection } from '../database/database.js';

const getPlatos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xpro.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto");
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
        const { nombre,precio,descripcion,stock,ciudadProv } = req.body;

        const producto={
            nombre,precio,descripcion
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

const addStock = async (req, res) => {
    try {
        const {idProducto} = req.params;
        const { stock } = req.body;

        const plato={
            stock,idProducto
        }

        const connection = await getConnection();
        const result=await connection.query("UPDATE plato SET ? WHERE idProducto = ?",[plato, idProducto]);
        console.log(result);
        res.json({message:"stock del plato actualizado"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deletePlato=async (req,res)=>{
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result=await connection.query("DELETE FROM producto WHERE idProducto=?",idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const updatePlato = async (req, res) => {
    try {
        const { nombre,precio,descripcion,stock,ciudadProv,idProducto } = req.body;

        const producto={
            nombre,precio,descripcion,idProducto
        }
        const plato={
            stock,ciudadProv,idProducto
        }
        //const result=await connection.query("UPDATE usuario SET ? WHERE ci = ?",[usuario, ci]);
        const connection = await getConnection();
        const result = await connection.query('UPDATE producto SET ? WHERE idProducto=?',[producto,idProducto]);
        const result2 = await connection.query('UPDATE plato SET ? WHERE idProducto=?',[plato,idProducto]);
        console.log(result);
        console.log(result2);
        res.json({message:"plato actualizado"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getPlatos,
    getPlato,
    getIngredientesPlato,
    addPlato,
    addStock,
    deletePlato,
    updatePlato    
};