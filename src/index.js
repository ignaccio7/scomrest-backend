import app from './app';

//para que se mantenga ejecutando
app.listen(app.get("port"));


console.log(`Servidor en puerto : ${app.get("port")}`);
