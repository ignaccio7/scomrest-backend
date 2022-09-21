import { getConnection } from '../database/database.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const getPersonas = async (req, res) => {
    try {
        console.log("aaaa");
        const connection = await getConnection();
        console.log("aaaa");
        const result = await connection.query("SELECT * FROM usuario");
        console.log("aaaa");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getPersona = async (req, res) => {
    try {
        const { ci } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuario WHERE ci=?", ci);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addPersona = async (req, res) => {
    try {
        const { ci,nombre,apPaterno,apMaterno,turno,username,password } = req.body;
        console.log(ci,nombre,apPaterno,apMaterno,turno,username,password);

        const usuario={
            ci,nombre,apPaterno,apMaterno,turno,username,password
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO usuario SET ?',usuario);
        console.log(result);
        res.json({message:"usuario añadido"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deletePersona=async (req,res)=>{
    try {
        const { ci } = req.params;
        console.log("el ci es",ci);
        const connection = await getConnection();
        const result=await connection.query("DELETE FROM usuario WHERE ci=?",ci);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const updatePersona=async (req,res)=>{
    //res.json("hola:mundo");
    try {
        const {ci} = req.params;
        const {nombre,apPaterno,apMaterno,turno,username,password} = req.body;

        const usuario={
            ci,nombre,apPaterno,apMaterno,turno,username,password
        }

        const connection=await getConnection();
        const result=await connection.query("UPDATE usuario SET ? WHERE ci = ?",[usuario, ci]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const loginUsuario = async (req,res)=>{
    try {
        const { username,password } = req.body;
        console.log(username,password);
        const connection=await getConnection();
        const result=await connection.query('SELECT ci FROM usuario WHERE (username = ?) and (password = ?)',[username,password]);
        if (result.length>0) {
            
            const ci = result[0].ci;
            //para el token
            const token = jwt.sign({ci},config.SECRET,{
                expiresIn:86400 //24h
            })

            console.log(result);
            res.json({token});
        } else {
            console.log(result);
            res.json({message:"Credenciales Incorrectas"});
        }        
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }
}

export const metodos = {
    getPersonas,
    getPersona,
    addPersona,
    deletePersona,
    updatePersona,
    loginUsuario
};