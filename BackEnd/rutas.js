const router= require('express').Router()
const conexion= require('./bd/conexion');

//--------------agregamos rutas---------------
//Obtener todas las salas
router.get('/',(req,res)=>{
    let sql='SELECT * FROM salas';
    conexion.query(sql,(err,rows, fields)=>{
        if(err){
            throw err;
        }else{        
            res.json(rows)   
        }
    })
})

//agregar sala
router.get('/sala',(req,res)=>{
    let sql=`insert into salas(hrinicio,hrfinal,estado) VALUES('','','libre') `;
    conexion.query(sql, (err,rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'Sala agregada'});
        }
    })
})

//Para elminiar una sala
router.delete('/eliminar/:id',(req,res)=>{
    const {id}= req.params
    let sql=`DELETE FROM salas WHERE id='${id}'`;
    conexion.query(sql, (err,rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'Sala eliminado'});
        }
    })
})

//Para actualizar una Sala
router.put('/actualizar/:idsala',(req,res)=>{
    const {idsala}= req.params;
    const {hrinicio,hrfinal}= req.body;
    
    let sql=`update salas set 
                hrinicio='${hrinicio}',
                hrfinal='${hrfinal}',
                estado='reservada'
                where id='${idsala}'`
    conexion.query(sql, (err,rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'Sala actualizada'});
        }
    })
})

//ruta para liberar una Sala
router.put('/liberar/:idsala',(req,res)=>{

    const {idsala}= req.params;
    const {a1,a2}= req.body;

    let sql=`update salas set 
                hrinicio='${a1}',
                hrfinal='${a2}',
                estado='libre'
                where id='${idsala}'`
     conexion.query(sql, (err,rows, fields)=>{
         if(err){
             throw err;
         }else{
             res.json({status:'Sala liberada'});
         }
     })
})

module.exports=router;