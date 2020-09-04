import express from "express"
import {Request,Response,NextFunction,Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import producto_ from './rutas/productoRuta';
import ventaRta from "./rutas/ventaRuta";
import compraRta from "./rutas/compraRuta";
import categoriaRta from "./rutas/categoriaRutas";



class main 
{
    private app : Application
    constructor(
    ){
        this.app = express()
        this.configuracionInicial()
        this.Rutas()
        this.configuracionDePuertos()
    }

    public configuracionInicial(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    public Rutas(){
        this.app.use(producto_)
        this.app.use(ventaRta)
        this.app.use(compraRta)
        this.app.use(categoriaRta)
    }

    public configuracionDePuertos(){
        this.app.set('port',5000)
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`)
        })
    }
}

const main_ : main = new main()