import jwt from "jsonwebtoken";
import config from '../config.js';
import { getConnection } from '../database/database.js';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        console.log(token);
        console.log(config.SECRET);

        if (!token) {
            return res.json({ message: "No existe el token" });
        }
        const decoded = jwt.verify(token, config.SECRET);

        let ci=decoded.ci
        
        const connection = await getConnection();
        const result=await connection.query("SELECT * FROM usuario WHERE ci=?", ci);

        if (result.length=0) {
            return res.json({message:"No existe el usuario"});
        }

        next();
    } catch (error) {
        return res.json({message:'No autorizado'});
    }

}