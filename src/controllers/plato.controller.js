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
        const result = await connection.query("SELECT xpla.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto and xpla.idProducto=?", idProducto);
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
        const result = await connection.query("SELECT xing.idIng,xing.nombre,xing.tipo FROM contiene xcont,ingrediente xing WHERE xcont.idIng = xing.idIng  AND idProducto =?", idProducto);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addIngredientesPlato = async (req,res)=>{
    try {
        const { idProducto,ingredients } = req.body;

        const connection = await getConnection();

        let pay = {
            idProducto:idProducto,
            idIng:""
        } 
        let result;

        ingredients.forEach(async element => {
            pay.idIng=element.idIng;
            console.log(pay);
            result = await connection.query('INSERT INTO contiene SET ?',pay);
            console.log(result);
        });
        res.json({message:"Ingredientes a??adidos"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const updateIngredientesPlato = async (req,res)=>{
    try {
        const { idProducto,ingredients } = req.body;

        const connection = await getConnection();

        //eliminamos los registros tenidos anteriormente y creamos un nuevo pedido
        const eli1 = await connection.query('DELETE FROM contiene WHERE idProducto = ?', idProducto);
        console.log(eli1);

        let pay = {
            idProducto:idProducto,
            idIng:""
        } 
        let result;

        ingredients.forEach(async element => {
            pay.idIng=element.idIng;
            console.log(pay);
            result = await connection.query('INSERT INTO contiene SET ?',pay);
            console.log(result);
        });
        res.json({message:"Ingredientes actualizados"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addPlato = async (req, res) => {
    try {
        const connection = await getConnection();

        const { nombre,precio,descripcion,stock,ciudadProv,image } = req.body;
        console.log(nombre,precio,descripcion,stock,ciudadProv);
        let idProducto="";
        const producto={
            precio,descripcion,nombre
        }
        const result = await connection.query('INSERT INTO producto SET ?',producto);
        console.log(result);

        console.log("inserto producto");

        const busca = await connection.query('SELECT idProducto FROM producto WHERE nombre LIKE ? AND precio LIKE ? AND descripcion LIKE ?',[nombre,precio,descripcion]);

        idProducto = busca[0].idProducto;

        const plato={
            stock,ciudadProv,idProducto,image
        }
        const result2 = await connection.query('INSERT INTO plato SET ?',plato);
        
        console.log(result2);
        res.json({message:"plato a??adido"});
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
        const { nombre,precio,descripcion,stock,ciudadProv,idProducto,image } = req.body;

        const producto={
            nombre,precio,descripcion,idProducto
        }
        console.log(producto);
        const plato={
            stock,ciudadProv,idProducto,image
        }
        console.log(plato);
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

const getPlatosPedido = async (req, res) => {
    try {
        console.log("OBTENIENDO : getPlatosPedido");
        const connection = await getConnection();
        const result = await connection.query("SELECT xpla.idProducto,xpla.stock,xpla.ciudadProv,xpro.nombre,xpro.descripcion,xpro.precio,xpla.image FROM plato xpla, producto xpro WHERE xpla.idProducto = xpro.idProducto AND xpla.stock>0");
        console.log(result);
        res.json(result);
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
    updatePlato,
    getPlatosPedido,
    addIngredientesPlato,
    updateIngredientesPlato,    
};