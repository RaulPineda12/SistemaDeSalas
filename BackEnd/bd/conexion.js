//este archivo hace la conexion a la base de datos llamada dbsalas
const mysql = require('mysql');

const conexion=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hola123',
    port:3306,
    database:'dbsalas'
});

conexion.connect((err)=>{
    if(err){
        console.log("error en la conexion a la base de datos");
        console.log(err);
    }else{
        console.log("Conexion exitosa a la base de datos");
    }
});

module.exports=  conexion;