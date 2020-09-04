import categoriamodelo from '../modelo/categoriaModel';
import {Request,Response,NextFunction} from 'express';

class categoriaControl {
    constructor() {     }

    public async verCategorias(req: Request, res: Response, fun: Function) {
        let result: any = null;
        try {
           result = await categoriamodelo.buscarCategoria()
           res.status(200).json({
               respuesta: true,
               resultado: result
           }) 
        } catch (error) {
            res.status(200).json({
                respuesta: false,
                resultado: error
            }) 
        }
    }
}

const categoriactrl : categoriaControl = new categoriaControl()
export default categoriactrl