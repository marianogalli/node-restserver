const express=require('express')
const cors=require('cors')

class Server{

    constructor(){
        this.app=express()        
        this.puerto=process.env.PORT
        this.usuariosPath='/api/usuarios' 

        //Middlewars
        this.middlewars();

        //Rutas de mi aplicación
        this.routes() 
        
    }

    middlewars(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json())
        
        //Directorio público
        this.app.use(express.static('public'))  
             
    }
    

    routes(){
       
        this.app.use(this.usuariosPath,require('../routes/usuarios'))

    }

    listen(){
        this.app.listen(this.puerto,()=>{
            console.log('Escuchando peticiones en el puerto ',this.puerto);
        })
    }

}

module.exports=Server;