import { getConnection } from '../database/database.js';

const getIngredientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idIng,tipo,nombre FROM ingrediente");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const getIngrediente = async (req, res) => {
    try {
        const { idIng } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idIng,tipo,nombre FROM ingrediente WHERE idIng=?",idIng);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addIngrediente = async (req, res) => {
    try {
        const { tipo,nombre } = req.body;
        
        const ingrediente={
            tipo,nombre
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO ingrediente SET ?',ingrediente);
        console.log(result);
        res.json({message:"ingrediente añadido"});
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deleteIngrediente=async (req,res)=>{
    try {
        const { idIng } = req.params;
        const connection = await getConnection();
        const result=await connection.query("DELETE FROM ingrediente WHERE idIng=?",idIng);
        console.log(result);
        res.json({message:"Ingrediente eliminado"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

const updateIngrediente=async (req,res)=>{
    //res.json("hola:mundo");
    try {
        const { tipo,nombre,idIng } = req.body;
        
        const ingrediente={
            tipo,nombre,idIng
        }

        const connection=await getConnection();
        const result=await connection.query("UPDATE ingrediente SET ? WHERE idIng = ?",[ingrediente, idIng]);
        console.log(result);

        res.json({message:"Ingrediente modificado"});
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }    
};

export const metodos = {
    getIngredientes,
    getIngrediente,
    addIngrediente,
    deleteIngrediente,
    updateIngrediente
};