require('./bd/conexion');

const express= require('express')
const cors= require('cors')
const port=(process.env.port || 3001);

//express
const app= express();
app.use(cors());


//admitir tipo de datos
app.use(express.json())


//config
app.set('port',port);

//rutas
app.use('/api', require('./rutas'))

//iniciar express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log("error al iniciar el servidor")
    }else{
        console.log("servidor corriendo en el puerto: "+port)
    }
})