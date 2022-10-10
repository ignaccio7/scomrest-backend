import { getConnection } from '../database/database.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const getPersonas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT *,tipousuario(ci) as tipo FROM usuario");
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
        const result = await connection.query("SELECT * FROM usuario WHERE ci=? LIMIT 1", ci);

        //PARA OBTENER EL TIPO DE USUARIO
        const result2 = await connection.query("SELECT tipousuario(?) as tipo FROM Dual", ci);
        let institucion = "";
        let aniosExp = "";
        let profesion = "";
        switch (result2[0].tipo) {
            case 'chef':
                const result3 = await connection.query("SELECT xch.institucion,xch.aniosexp FROM chef xch, usuario xusu WHERE xch.cichef = xusu.ci AND xch.ciChef = ?", ci);
                institucion = result3[0].institucion;
                aniosExp = result3[0].aniosexp;
                break;
            case 'camarero':
                const result4 = await connection.query("SELECT xch.aniosexp FROM camarero xch, usuario xusu WHERE xch.ciCamarero = xusu.ci AND xch.ciCamarero = ?", ci);
                aniosExp = result4[0].aniosexp;
                break;
            case 'cajero':
                const result5 = await connection.query("SELECT xch.institucion,xch.profesion FROM cajero xch, usuario xusu WHERE xch.ciCajero = xusu.ci AND xch.ciCajero = ?", ci);
                profesion = result5[0].profesion;
                institucion = result5[0].institucion;
                break;
            default:
                break;
        }

        console.log(result);
        console.log(result2[0].tipo);
        res.json({
            nombre: result[0].nombre,
            apPaterno: result[0].apPaterno,
            apMaterno: result[0].apMaterno,
            turno: result[0].turno,
            ci: result[0].ci,
            username: result[0].username,
            password: result[0].password,
            institucion,
            aniosExp,
            profesion,
            tipo: result2[0].tipo
        });
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const addClient = async (req, res) => {
    try {
        const { ci, nombre, apPaterno, apMaterno, turno, username, password } = req.body;

        const usuario = {
            ci, nombre, apPaterno, apMaterno, turno, username, password
        }

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO usuario SET ?', usuario);
        console.log(result);

        const cliente = {
            ciCliente: ci, razonSocial: apPaterno
        }

        const result2 = await connection.query('INSERT INTO cliente SET ?', cliente);
        console.log(result2);
        res.json({ message: "usuario añadido" });
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }

}

const addPersona = async (req, res) => {
    try {
        const { ci, nombre, apPaterno, apMaterno, turno, username, password, aniosExp, institucion, profesion, selectTipo } = req.body;
        console.log(ci, nombre, apPaterno, apMaterno, turno, username, password);

        const usuario = {
            ci, nombre, apPaterno, apMaterno, turno, username, password
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO usuario SET ?', usuario);
        console.log(result);


        switch (selectTipo) {
            case 'chef':
                const chef = {
                    ciChef: ci,
                    aniosExp,
                    institucion
                }
                const result2 = await connection.query('INSERT INTO chef SET ?', chef);
                console.log(result2);
                break;
            case 'cajero':
                const cajero = {
                    ciCajero: ci,
                    profesion,
                    institucion
                }
                const result3 = await connection.query('INSERT INTO cajero SET ?', cajero);
                console.log(result3);
                break;
            case 'camarero':
                const camarero = {
                    ciCamarero: ci,
                    aniosExp
                }
                const result4 = await connection.query('INSERT INTO camarero SET ?', camarero);
                console.log(result4);
                break;
            default:
                break;
        }

        res.json({ message: "usuario añadido" });
    } catch (error) {
        res.status(500);//error de lado del servidor
        res.send(error.message);
    }
}

const deletePersona = async (req, res) => {
    try {
        const { ci } = req.params;
        console.log("el ci es", ci);
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE ci=?", ci);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }
};

const updatePersona = async (req, res) => {
    //res.json("hola:mundo");
    try {
        //const {ci} = req.params;
        //const {ci,nombre,apPaterno,apMaterno,turno,username,password} = req.body;
        const { ci, nombre, apPaterno, apMaterno, turno, username, password, aniosExp, institucion, profesion, selectTipo } = req.body;

        const usuario = {
            ci, nombre, apPaterno, apMaterno, turno, username, password
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET ? WHERE ci = ?", [usuario, ci]);
        console.log(result);

        switch (selectTipo) {
            case 'chef':
                const chef = {
                    ciChef: ci,
                    aniosExp,
                    institucion
                }
                console.log(chef);
                const result2 = await connection.query("UPDATE chef SET ? WHERE ciChef = ?", [chef, ci]);
                console.log(result2);
                break;
            case 'cajero':
                const cajero = {
                    ciCajero: ci,
                    profesion,
                    institucion
                }
                console.log(cajero);
                const result3 = await connection.query("UPDATE cajero SET ? WHERE ciCajero = ?", [cajero, ci]);
                console.log(result3);
                break;
            case 'camarero':
                const camarero = {
                    ciCamarero: ci,
                    aniosExp
                }
                console.log(camarero);
                const result4 = await connection.query("UPDATE camarero SET ? WHERE ciCamarero = ?", [camarero, ci]);
                console.log(result4);
                break;
            default:
                break;
        }


        res.json({ message: "usuario modificado" });
    } catch (error) {
        res.status(500); //error de lado del servidor
        res.send(error.message);
    }
};

const loginUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const connection = await getConnection();
        const result = await connection.query('SELECT ci FROM usuario WHERE (username = ?) and (password = ?)', [username, password]);
        if (result.length > 0) {

            const ci = result[0].ci;
            //para el token
            const token = jwt.sign({ ci }, config.SECRET, {
                expiresIn: 86400 //24h
            })
            console.log(result);
            res.json({ token });
        } else {
            console.log(result);
            res.status(400).json({ message: "Credenciales Incorrectas" });
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
    loginUsuario,
    addClient
};