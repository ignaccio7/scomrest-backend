import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
//minuto20 https://www.youtube.com/watch?v=lV7mxivGX_I&t=7125s
import personaRouter from './routes/persona.routes';
import platoRouter from './routes/plato.routes';
import ingredienteRouter from './routes/ingrediente.router';
import pedidoRouter from './routes/pedido.routes';
import bebidaRouter from './routes/bebida.routes';
import mesaRouter from './routes/mesa.routes';
import facturaRouter from './routes/factura.routes';
import config from "./config.js";

console.log(config.port);

const cors = require('cors');

const app=express();

//para el cors
app.use(cors());

app.set('pkg',pkg);

app.set('port',config.port);

//Middlewares   son intermedios entre una peticion y una respuesta
app.use(morgan("dev")); //en la parte de la consola tendremos un listado de las peticiones
                        //utilizamos morgan en modo de desarrollo 

//para entender json
app.use(express.json());

//rutas
app.use('/api/persona/',personaRouter);
app.use('/api/plato/',platoRouter);
app.use('/api/ingrediente/',ingredienteRouter);
app.use('/api/pedido/',pedidoRouter);
app.use('/api/bebida/',bebidaRouter);
app.use('/api/mesa/',mesaRouter);
app.use('/api/factura/',facturaRouter);

app.get('/',(req,res)=>{
    res.json({
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version,
        name:app.get('pkg').name,
    });
});



export default app;