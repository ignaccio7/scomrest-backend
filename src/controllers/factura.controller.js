import { getConnection } from '../database/database.js';

const getFacturas = async (req, res) => {
    try {
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT * FROM factura");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getFacturasCliente = async (req, res) => {
    try {
        const {ciCliente} = req.params;
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT xfac.*,xcli.*,xusu.* FROM factura xfac, cliente xcli,usuario xusu WHERE xcli.ciCliente = xfac.ciCliente AND xusu.ci=?",ciCliente);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//OBTENIENDO PEDIDOS CON UN ESTADO 2 PARA SER FACTURADOS
//obteniendo pedidos para el CAJERO y pueda facturar
const getPedidosCajero = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '2'");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addFactura = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {fecha,hora,total,cambio,ciCliente,pedidos} = req.body;
        console.log("Datos para registro de la factura");
        /*console.log(fecha);
        console.log(idMesa);
        console.log(hora);*/

        const factura={
            fecha,hora,total,cambio,ciCliente
        }  

        const result = await connection.query('INSERT INTO factura SET ?',factura);
        console.log(result);

        const busca = await connection.query('SELECT idFactura FROM factura WHERE fecha LIKE ? AND hora LIKE ?',[fecha,hora]);

        let idFactura = busca[0].idFactura;
        console.log(idFactura);

        let nroPedido = "";           

        let result2;
        pedidos.forEach(async element => {
            nroPedido=element.nroPedido;
            console.log(pay);
            result2 = await connection.query("UPDATE pedido SET nro_factura = ? WHERE nroPedido = ?",[nro_factura, nroPedido]);
            console.log(result2);
        });
        res.json({message:"Factura Registrada"});
        
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getFacturas,
    getFacturasCliente,
    addFactura,
    getPedidosCajero,
};