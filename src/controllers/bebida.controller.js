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

const getBebida = async (req, res) => {
    try {
        const { idProducto } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT xbe.idProducto,xbe.marca,xbe.tipo,xbe.grado_alcoholico,xpro.nombre,xpro.descripcion,xpro.precio,xbe.image FROM bebida xbe, producto xpro WHERE xbe.idProducto = xpro.idProducto and xbe.idProducto=?", idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addBebida = async (req, res) => {
    try {
        const { nombre,precio,descripcion,marca,tipo,grado_alcoholico,image } = req.body;

        const producto={
            nombre,precio,descripcion
        }
        const result = await connection.query('INSERT INTO producto SET ?',producto);
        console.log(result);

        const busca = await connection.query('SELECT idProducto FROM producto WHERE nombre LIKE ? AND precio LIKE ? AND descripcion LIKE ?',[nombre,precio,descripcion]);

        const idProducto = busca[0].idProducto;

        const bebida={
            marca,tipo,grado_alcoholico,idProducto,image
        }

        const connection = await getConnection();
        const result2 = await connection.query('INSERT INTO bebida SET ?',bebida);
        
        console.log(result2);
        res.json({message:"bebida añadida"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deleteBebida=async (req,res)=>{
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

const updateBebida = async (req, res) => {
    try {
        const { nombre,precio,descripcion,marca,tipo,grado_alcoholico,idProducto,image } = req.body;

        const producto={
            nombre,precio,descripcion,idProducto
        }
        const bebida={
            marca,tipo,grado_alcoholico,idProducto,image
        }
        //const result=await connection.query("UPDATE usuario SET ? WHERE ci = ?",[usuario, ci]);
        const connection = await getConnection();
        const result = await connection.query('UPDATE producto SET ? WHERE idProducto=?',[producto,idProducto]);
        const result2 = await connection.query('UPDATE bebida SET ? WHERE idProducto=?',[bebida,idProducto]);
        console.log(result);
        console.log(result2);
        res.json({message:"bebida actualizada"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getBebidasPedido = async (req, res) => {
    try {
        console.log("OBTENIENDO : getBebidasPedido");
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
    getBebida,
    addBebida,
    deleteBebida,
    updateBebida,
    getBebidasPedido, 
};