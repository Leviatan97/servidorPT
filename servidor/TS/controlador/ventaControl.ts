import ventamodel from "../modelo/ventaModel";
import {Request,Response,NextFunction} from 'express';

class ventaControl {
    constructor() {    }

    /**
     * registrarVenta
     */
    public async registrarVenta(req: Request, res: Response, fun: Function) {
        let datos = req.body
        let result = null
        try {
            result = await ventamodel.registrarVenta(datos)
            res.status(200).json({
                respuesta: true,
                resultado : result
            });
        } catch (error) {
            res.json({
                respuesta: false,
                resultado: error
            })
        }
    }
}

const ventacrtl : ventaControl = new ventaControl();
export default ventacrtl