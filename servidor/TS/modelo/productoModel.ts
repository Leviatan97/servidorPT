import conexion from '../conexion/conexion'

class productoModel 
{
    constructor() {}

    /**
     * buscarProductos
     */
    public buscarProductos() {
        return new Promise(async (resolve, reject) => {
            (await conexion).query(`SELECT * FROM produco`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

const productomodel: productoModel = new productoModel()
export default productomodel