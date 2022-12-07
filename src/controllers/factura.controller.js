//PARA DESCARGAR EL PDF 
const pdf = require('html-pdf');
//PARA LA CONEXION
import { getConnection } from '../database/database.js';

const getPdf = async (req, res) => {
    try {
        const connection = await getConnection();
        const { idFactura } = req.params;
        const result = await connection.query("SELECT xfac.* FROM factura xfac WHERE idFactura = ?", idFactura);
        const result2 = await connection.query("SELECT xusu.apPaterno as patCliente FROM factura xfac,usuario xusu WHERE xusu.ci = xfac.ciCliente AND idFactura = ?", idFactura);
        const result3 = await connection.query("SELECT xusu.apPaterno as patCajero FROM factura xfac,usuario xusu WHERE xusu.ci = xfac.ciCajero AND idFactura = ?", idFactura);
        //nrodepedido por los pedidos
        const result4 = await connection.query("SELECT xped.nroPedido FROM pedido xped WHERE idFactura = ?", idFactura);
        let result5;
        let vecNroPedidos = [];
        console.log(result);
        console.log(JSON.stringify(result[0]));
        let content = `<html>
        <img src="archivePdf/logoscomSinfondo.png" alt="no hay imagen"> </br>
        <h1>Factura NROº ${idFactura} </h1>
        -------------------------------------------------------------<br/>
            FECHA : ${result[0].fecha}<br/>
            HORA : ${result[0].hora}<br/>
            SEÑOR(ES)  : ${result2[0].patCliente}<br/>
        -------------------------------------------------------------<br/>`;
        console.log("LOS NUMEROS DE PEDIDOS SON");
        console.log(result4);
        result4.forEach(async element => {
            console.log(element.nroPedido);
            vecNroPedidos.push(element.nroPedido);
            //content = content + `-${element.nroPedido}-<br/>`;
        });
        console.log("LOS NUMEROS DE PEDIDOS SON");

        console.log("VECTOR DE PEDIDOS:", vecNroPedidos);
        content = content+`<table> <tr> <td>DESCRIPCION</td> <td>PRECIO</td> <td>CANTIDAD</td> <td>TOTAL</td> </tr>`;
        for (let index = 0; index < vecNroPedidos.length; index++) {
            const el = vecNroPedidos[index];
            console.log("------NUMERO DE PEDIDO :", el);
            result5 = await connection.query("SELECT xpro.nombre,xpro.precio,xadqui.cantidad FROM adquiere xadqui, producto xpro WHERE xadqui.idproducto = xpro.idproducto AND xadqui.nropedido = ?", el);
            console.log(result5);
            result5.forEach(element => {
                console.log(element.nombre);
                //content = content + `-${element.nombre}-<br/>`;
                content = content+`<tr><td>-${element.nombre}</td><td>${element.precio}</td><td>${element.cantidad}</td><td>${element.cantidad*element.precio}</td></tr>`;    
            });
        }
        content = content + `</table><br/>`;
        content = content + `-------------------------------------------------------------<br/>
            TOTAL A PAGAR  : ${result[0].total}<br/> 
            CAMBIO  : ${result[0].cambio}<br/> 
            USUARIO  : ${result3[0].patCajero}<br/> 
            </html>
        `;
        pdf.create(await content).toFile('./html-pdf.pdf', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
        //console.log(content);
        await console.log("hola");
        await res.json({ message: "hola mundo" });
    } catch (error) {
        console.log(error);
    }
}

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
        const { ciCliente } = req.params;
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT xfac.*,xcli.*,xusu.* FROM factura xfac, cliente xcli,usuario xusu WHERE xcli.ciCliente = xfac.ciCliente AND xusu.ci=?", ciCliente);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//OBTENIENDO PEDIDOS CON UN ESTADO 2 PARA SER FACTURADOS
//obteniendo pedidos para que el CAJERO pueda facturar
const getPedidosCajero = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '2' AND xped.fecha = (SELECT DATE(NOW()) AS fecha)");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addFactura = async (req, res) => {
    try {
        const connection = await getConnection();
        const { total, cambio, fecha, hora, ciCliente, ciCajero, pedidos } = req.body;
        console.log("Datos para registro de la factura");
        /*console.log(fecha);
        console.log(idMesa);
        console.log(hora);*/
        console.log(ciCajero);

        const factura = {
            total, cambio, fecha, hora, ciCliente, ciCajero
        }

        const result = await connection.query('INSERT INTO factura SET ?', factura);
        console.log(result);

        const busca = await connection.query('SELECT idFactura FROM factura WHERE fecha LIKE ? AND hora LIKE ?', [fecha, hora]);

        let idFactura = busca[0].idFactura;
        console.log(idFactura);

        let nroPedido = "";

        let result2;
        pedidos.forEach(async element => {
            nroPedido = element.nroPedido;
            result2 = await connection.query("UPDATE pedido SET idFactura = ? WHERE nroPedido = ?", [idFactura, nroPedido]);
            console.log(result2);
        });
        res.json({ message: "Factura Registrada", idFactura: idFactura });

    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//obteniendo pedidos POR RANGO
const postFacturasRango = async (req, res) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT xfac.total,xfac.cambio,xfac.fecha,xfac.idFactura,xfac.ciCliente,TMP.nombre as nombreCliente,xfac.ciCajero,TMP2.nombre as nombreCajero FROM factura xfac,(SELECT ci,nombre FROM usuario) TMP, (SELECT ci,nombre FROM usuario) TMP2 WHERE xfac.ciCliente = TMP.ci AND xfac.ciCajero = TMP2.ci AND xfac.fecha BETWEEN ? AND ?", [fechaInicio,fechaFin]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    postFacturasRango,
    getPdf,
    getFacturas,
    getFacturasCliente,
    addFactura,
    getPedidosCajero,
};