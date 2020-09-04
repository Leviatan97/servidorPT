import conexion from '../conexion/conexion';

class ventaModel {
    constructor() {  }

    public registrarVenta(datos:any) {
        return new Promise(async (resolve,reject)=>{
            (await conexion).query('INSERT INTO venta set ?',[datos]).then((result:object)=>{
                resolve ({
                    resultado:true,
                    respuesta:result
                })
            }, (error: any)=>{
                reject({
                    resultado:false,
                    respuesta:error
                })
            })
        })
    }
}

const ventamodel : ventaModel = new ventaModel();
export default ventamodel