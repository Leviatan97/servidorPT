import compramodel from "../modelo/compraModel";
import {Request,Response,NextFunction} from 'express';

class compraControl {
    constructor() {  }

    /**
     * registrarCompra
     */
    public async registrarCompra(req: Request, res: Response, fun:Function) {
        let datos = req.body
        let result = null
        try {
            result = await compramodel.registraCompra(datos)
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

const compractrl : compraControl = new compraControl()
export default compractrl