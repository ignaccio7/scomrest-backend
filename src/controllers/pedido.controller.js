import { getConnection } from '../database/database.js';

const getPedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0'");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getPedidosHabilitados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '1'");
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
        const connection = await getConnection();
        const {fecha,idMesa,products,hora} = req.body;
        console.log("Datos para registro del pedido");
        console.log(fecha);
        console.log(idMesa);
        console.log(hora);

        const pedido={
            fecha,hora,idMesa,habilitado:0
        }  

        const result = await connection.query('INSERT INTO pedido SET ?',pedido);
        console.log(result);

        const busca = await connection.query('SELECT nroPedido FROM pedido WHERE fecha LIKE ? AND hora LIKE ? AND idMesa LIKE ?',[fecha,hora,idMesa]);

        let nroPedido = busca[0].nroPedido;
        console.log(nroPedido);
        /*products.forEach(element => {
            console.log(element.idProducto,element.cantidad); 
        });*/
        let pay = {
            idProducto:"",
            nroPedido:"",
            cantidad:""            
        }                
        let result2;
        products.forEach(async element => {
            pay.idProducto=element.idProducto;
            pay.cantidad=element.cantidad;
            pay.nroPedido=nroPedido;
            console.log(pay);
            result2 = await connection.query('INSERT INTO adquiere SET ?',pay);
            console.log(result2);
        });
        res.json({message:"pedido añadido"});
        
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}


export const metodos = {
    getPedidos,
    getPedidosHabilitados,
    getproductosPedido,
    enablePedido,
    addPedido
};