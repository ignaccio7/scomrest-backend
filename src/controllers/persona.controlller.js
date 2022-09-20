import { getConnection } from '../database/database.js';

const getPersonas = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM scom_persona");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    } 
}

export const metodos={
    getPersonas
};