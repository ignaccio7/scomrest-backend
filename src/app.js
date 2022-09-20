import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
//minuto20 https://www.youtube.com/watch?v=lV7mxivGX_I&t=7125s
import personaRouter from './routes/persona.routes';

const app=express();

app.set('pkg',pkg);

app.set('port',4000);

//Middlewares   son intermedios entre una peticion y una respuesta
app.use(morgan("dev")); //en la parte de la consola tendremos un listado de las peticiones
                        //utilizamos morgan en modo de desarrollo 

//rutas
app.use('/api/persona/',personaRouter);

app.get('/',(req,res)=>{
    res.json({
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version,
        name:app.get('pkg').name,
    });
});



export default app;