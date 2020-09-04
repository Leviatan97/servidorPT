import conexion from '../conexion/conexion';

class categoriaModelo 
{
    constructor() {  }

    /**
     * buscarCategoria
     */
    public buscarCategoria() {
        return new Promise(async (resolve, reject) => {
            (await conexion).query(`SELECT * FROM categoria`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}
const categoriamodelo: categoriaModelo = new categoriaModelo()
export default categoriamodelo