import { getConnection } from '../database/database.js';

const getProveedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idProveedor,nombre,direccion,contacto FROM proveedor");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getProveedor = async (req, res) => {
    try {
        const { idProveedor } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre,direccion,contacto,idProveedor FROM proveedor WHERE idProveedor=?",idProveedor);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addProveedor = async (req, res) => {
    try {
        const { nombre,direccion,contacto } = req.body;
        
        const proveedor={
            nombre,direccion,contacto
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO proveedor SET ?',proveedor);
        console.log(result);
        res.json({message:"proveedor añadido"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deleteProveedor = async (req,res)=>{
    try {
        const { idProveedor } = req.params;
        const connection = await getConnection();
        const result=await connection.query("DELETE FROM proveedor WHERE idProveedor=?",idProveedor);
        console.log(result);
        res.json({message:"Proveedor eliminado"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const updateProveedor=async (req,res)=>{
    //res.json("hola:mundo");
    try {
        const { nombre,direccion,contacto,idProveedor } = req.body;
        
        const proveedor={
            nombre,direccion,contacto,idProveedor
        }

        const connection=await getConnection();
        const result=await connection.query("UPDATE proveedor SET ? WHERE idProveedor = ?",[proveedor, idProveedor]);
        console.log(result);

        res.json({message:"Proveedor modificado"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const addChefIngredienteProveedor = async (req, res) => {
    try {
        const { ciChef,idProveedor,idIng,cantidad,fechaCad,precio } = req.body;
        
        const registroCIP={
            ciChef,idProveedor,idIng,cantidad,fechaCad,precio
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO solicitacip SET ?',registroCIP);
        console.log(result);
        res.json({message:"pedido añadido"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getPedidosChefProveedorIngrediente = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getPedidosChef = async (req, res) => {
    try {
        const { ci } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng AND ch.ci =?",ci);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

//obteniendo pedidos POR RANGO
const postPedidoChefProveedorRango = async (req, res) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT cip.ciChef,ch.nombre as nombrechef,cip.idProveedor,prov.nombre as nombreProveedor,cip.idIng,ing.nombre as nombreIngrediente,cip.cantidad,cip.fechaCad,cip.precio FROM solicitacip cip, usuario ch, proveedor prov, ingrediente ing WHERE cip.ciChef = ch.ci AND cip.idProveedor = prov.idProveedor AND cip.idIng = ing.idIng AND cip.fechaCad BETWEEN ? AND ?", [fechaInicio,fechaFin]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    postPedidoChefProveedorRango,
    getProveedores,
    getProveedor,
    addProveedor,
    deleteProveedor,
    updateProveedor,
    addChefIngredienteProveedor,
    getPedidosChefProveedorIngrediente,
    getPedidosChef,
};