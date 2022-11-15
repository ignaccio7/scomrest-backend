//PARA DESCARGAR EL PDF 
const pdf = require('html-pdf');
//PARA LA CONEXION
import { getConnection } from '../database/database.js';

const getPdf = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idMesa,nroSillas,disponibilidad FROM mesa");
        console.log(result);
        console.log(JSON.stringify(result[0]));
        const content = `
        <h1>Factura NROº </h1>
            <p>Generando un PDF con un HTML sencillo11</p>
            ${JSON.stringify(result[0])}    
        `;
        pdf.create(content).toFile('./html-pdf.pdf', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
        console.log("hola");
        res.json({ message: "hola mundo" });
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
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '2'");
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
        res.json({ message: "Factura Registrada" });

    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getPdf,
    getFacturas,
    getFacturasCliente,
    addFactura,
    getPedidosCajero,
};