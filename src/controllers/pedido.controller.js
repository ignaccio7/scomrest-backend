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

const getPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xped.ciCliente FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0' AND xped.nroPedido = ?", id);
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

const getproductosPedido = async (req, res) => {
    try {
        const { nroPedido } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT xpro.idproducto,xpro.nombre,xpro.precio,xadqui.cantidad FROM adquiere xadqui, producto xpro WHERE xadqui.idproducto = xpro.idproducto AND xadqui.nropedido =?", nroPedido);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const enablePedido = async (req, res) => {
    try {
        const { nroPedido } = req.params;
        const { habilitado } = req.body;

        const pedido = {
            habilitado, nroPedido
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE pedido SET ? WHERE nroPedido = ?", [pedido, nroPedido]);
        console.log(result);
        res.json({ message: "Pedido Actualizado" });
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

// const addPedido = async (req, res) => {
//     try {
//         const connection = await getConnection();
//         const { fecha, idMesa, products, hora, ci } = req.body;
//         console.log("Datos para registro del pedido");
//         console.log(fecha);
//         console.log(idMesa);
//         console.log(hora);
//         console.log(ci);

//         const pedido = {
//             fecha, hora, idMesa, habilitado: 0, ciCliente: ci
//         }

//         const result = await connection.query('INSERT INTO pedido SET ?', pedido);
//         console.log(result);

//         const busca = await connection.query('SELECT nroPedido FROM pedido WHERE fecha LIKE ? AND hora LIKE ? AND idMesa LIKE ?', [fecha, hora, idMesa]);
//         console.log("busca");
//         console.log(busca);
//         console.log("aaa");
//         let nroPedido = busca[0].nroPedido;
//         console.log(nroPedido);
//         /*products.forEach(element => {
//             console.log(element.idProducto,element.cantidad); 
//         });*/
//         let pay = {
//             idProducto: "",
//             nroPedido: "",
//             cantidad: ""
//         }
//         let result2;
//         let qstockproductobuscado;
//         let stockproductobuscado;
//         let verificandoStock;
//         let actuali;
//         products.forEach(async element => {
//             console.log("asigna");
//             pay.idProducto = element.idProducto;
//             pay.cantidad = element.cantidad;
//             pay.nroPedido = nroPedido;
//             console.log(pay);
//             console.log("asigna222");
//             /**PARA DISMINUIR EL STOCK DEL PLATO SEGUN LA CANTIDAD*/
//             qstockproductobuscado = await connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idProducto);
//             console.log("STOCK producto buscado");
//             stockproductobuscado = qstockproductobuscado[0].stock;
//             console.log(stockproductobuscado);
//             verificandoStock = stockproductobuscado - element.cantidad;

//             //registramos el pedido en la tabla adquiere
//             result2 = await connection.query('INSERT INTO adquiere SET ?', pay);
//             console.log(result2);
//             //actualizando el stock en la tabla de platos
//             actuali = await connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [verificandoStock, element.idProducto]);
//             console.log("ACTUALIZANDO EL STOCK");
//             console.log(actuali);

//             console.log("TERMINA PROCESSSSSSSSSS-------------------------------------");

//         });
//         res.json({ message: "pedido añadido" });

//     } catch (error) {
//         res.status(500);//error de lado del servidor
//         res.send(error.message);
//     }
// }

const addPedido = async (req,res)=>{
    try {
        const connection = await getConnection();
        const {fecha,idMesa,products,productsb,hora,ci} = req.body;
        console.log("Datos para registro del pedido");
        console.log(fecha);
        console.log(idMesa);
        console.log(hora);
        console.log(ci);
        console.log(products);
        console.log(productsb);

        const pedido={
            fecha,hora,idMesa,habilitado:0,ciCliente:ci
        }  

        const result = await connection.query('INSERT INTO pedido SET ?',pedido);
        console.log(result);

        const busca = await connection.query('SELECT nroPedido FROM pedido WHERE fecha LIKE ? AND hora LIKE ? AND idMesa LIKE ?',[fecha,hora,idMesa]);
        console.log("busca");
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
        let result3;
        let result4;
        products.forEach(async element => {
            pay.idProducto=element.idProducto;
            pay.cantidad=element.cantidad;
            pay.nroPedido=nroPedido;
            console.log(pay);
            result2 = await connection.query('INSERT INTO adquiere SET ?',pay);
            console.log(result2);

            result3 = await connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idProducto);
            console.log("Stock del producto ",result3[0].stock);

            result4 = await connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [result3[0].stock-element.cantidad, element.idProducto]);
            console.log(result4);
        });

        let pay2 = {
            idProducto:"",
            nroPedido:"",
            cantidad:""            
        }                
        let result22;
        productsb.forEach(async element => {
            pay2.idProducto=element.idProducto;
            pay2.cantidad=element.cantidad;
            pay2.nroPedido=nroPedido;
            console.log(pay2);
            result22 = await connection.query('INSERT INTO adquiere SET ?',pay2);
            console.log(result22);
        });

        res.json({message:"pedido añadido"});
        
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//desde aqui alv todo haha
//obteniendo pedidos del cliente por su ci
const getPedidosCliente = async (req, res) => {
    try {
        const { ci } = req.params;
        const connection = await getConnection();
        //const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas,xche.institucion,xusu.nombre,xusu.appaterno FROM pedido xped, mesa xmes, chef xche,usuario xusu WHERE xped.idMesa = xmes.idMesa AND xped.cichef = xche.cichef AND xusu.ci = xche.cichef");
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.idMesa,xmes.nrosillas,xped.ciCliente,xped.habilitado FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND ciCliente =  ?", ci);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//obteniendo pedidos para el camarero y este los pueda habilitar
const getPedidosCamarero = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT xped.nroPedido,xped.fecha,xped.habilitado,xped.idMesa,xmes.nrosillas FROM pedido xped, mesa xmes WHERE xped.idMesa = xmes.idMesa AND xped.habilitado LIKE '0'");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//obteniendo pedidos para el chef y este los pueda despachar
const getPedidosChef = async (req, res) => {
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

//para actualizar el pedido que el camarero adicionara o eliminara
const actualizaPedido = async (req, res) => {
    try {
        const connection = await getConnection();
        const {fecha,idMesa,products,productsb,hora,ciCliente,ciCamarero, nroPedido} = req.body;
        console.log("Datos para registro del pedido");
        console.log(fecha);
        console.log(idMesa);
        console.log(hora);
        console.log(ciCliente,ciCamarero);
        console.log(products);
        console.log(productsb);
        console.log(nroPedido);

        //eliminamos los registros tenidos anteriormente y creamos un nuevo pedido
        const eli1 = await connection.query('DELETE FROM adquiere WHERE nroPedido = ?', nroPedido);
        console.log(eli1);
        const eli2 = await connection.query('DELETE FROM pedido WHERE nroPedido = ?', nroPedido);
        console.log(eli2);
        console.log("despues de eliminar");

        //---------------------------------------------------------------------------
        const pedido={
            fecha,hora,idMesa,habilitado:1,ciCliente,ciCamarero,nroPedido
        }  

        const result = await connection.query('INSERT INTO pedido SET ?',pedido);
        console.log(result);

        /*products.forEach(element => {
            console.log(element.idProducto,element.cantidad); 
        });*/
        let pay = {
            idProducto:"",
            nroPedido:"",
            cantidad:""            
        }                
        let result2;
        let result3;
        let result4;
        products.forEach(async element => {
            pay.idProducto=element.idproducto;
            pay.cantidad=element.cantidad;
            pay.nroPedido=nroPedido;
            console.log(pay);
            result2 = await connection.query('INSERT INTO adquiere SET ?',pay);
            console.log(result2);

            result3 = await connection.query('SELECT stock FROM plato WHERE idProducto = ?', element.idproducto);
            console.log("Stock del producto ",result3[0].stock);

            result4 = await connection.query('UPDATE plato SET stock=? WHERE idProducto=?', [result3[0].stock-element.cantidad, element.idproducto]);
            console.log(result4);
        });

        let pay2 = {
            idProducto:"",
            nroPedido:"",
            cantidad:""            
        }                
        let result22;
        productsb.forEach(async element => {
            pay2.idProducto=element.idproducto;
            pay2.cantidad=element.cantidad;
            pay2.nroPedido=nroPedido;
            console.log(pay2);
            result22 = await connection.query('INSERT INTO adquiere SET ?',pay2);
            console.log(result22);
        });

        res.json({message:"pedido modificado"});

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
    addPedido,
    getPedidosCliente,
    getPedidosCamarero,
    getPedidosChef,
    getPedido,
    actualizaPedido,
};