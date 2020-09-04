import conexion from '../conexion/conexion';

class compraModel {
    constructor() {  }

    /**
     * registraCompra
     */
    public registraCompra(datos: any) {
        return new Promise(async (resolve,reject)=>{
            (await conexion).query('INSERT INTO compra set ?',[datos]).then((result:object)=>{
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
const compramodel: compraModel = new compraModel();
export default compramodel