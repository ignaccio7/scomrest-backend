import { getConnection } from '../database/database.js';

const getMesas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idMesa,nroSillas,disponibilidad FROM mesa");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getMesa= async (req, res) => {
    try {
        const { idMesa } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idMesa,nroSillas,disponibilidad FROM mesa WHERE idMesa=?",idMesa);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addMesa = async (req, res) => {
    try {
        const { nroSillas,disponibilidad } = req.body;
        
        const mesa={
            nroSillas,disponibilidad
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO mesa SET ?',mesa);
        console.log(result);
        res.json({message:"mesa añadida"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deleteMesa=async (req,res)=>{
    try {
        const { idMesa } = req.params;
        const connection = await getConnection();
        const result=await connection.query("DELETE FROM mesa WHERE idMesa=?",idMesa);
        console.log(result);
        res.json({message:"Mesa eliminada"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const updateMesa=async (req,res)=>{
    //res.json("hola:mundo");
    try {
        const { nroSillas,disponibilidad,idMesa } = req.body;
        
        const mesa={
            nroSillas,disponibilidad,idMesa
        }

        const connection=await getConnection();
        const result=await connection.query("UPDATE mesa SET ? WHERE idMesa = ?",[mesa, idMesa]);
        console.log(result);

        res.json({message:"Mesa modificada"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

export const metodos = {
    getMesas,
    getMesa,
    addMesa,
    deleteMesa,
    updateMesa
};