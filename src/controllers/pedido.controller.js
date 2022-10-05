import { getConnection } from '../database/database.js';

const getPedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getproductosPedido = async (req,res)=>{
    try {
        const { nroPedido } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT xadqui.nropedido,xpro.nombre,xpro.precio FROM adquiere xadqui, producto xpro WHERE xadqui.idproducto = xpro.idproducto AND xadqui.nropedido =?", nroPedido);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const enablePedido = async (req, res) => {
    try {
        const {nroPedido} = req.params;
        const { habilitado } = req.body;

        const pedido={
            habilitado,nroPedido
        }

        const connection = await getConnection();
        const result=await connection.query("UPDATE pedido SET ? WHERE nroPedido = ?",[pedido, nroPedido]);
        console.log(result);
        res.json({message:"Pedido Actualizado"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addPedido = async (req,res)=>{
    try {
        const {fecha,idMesa,products} = req.body;
        console.log("Datos para registro del pedido");
        console.log(fecha);
        console.log(idMesa);
        console.log(products);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}


export const metodos = {
    getPedidos,
    getproductosPedido,
    enablePedido,
    addPedido
};