import { config } from "dotenv";

config();

export default {    
    port : process.env.PORT || 4000,
    host : process.env.HOST || "localhost",
    database : process.env.DB_NAME || "dbscomrest",
    user : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || '',
    db_port : process.env.DB_PORT || '3306',
    SECRET:'scomrestGrupo8',
};