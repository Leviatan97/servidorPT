import productomodel from '../modelo/productoModel';
import {Request,Response,NextFunction} from 'express';
import FileSystem from '../FyleSystem/fyleSystem';

class productoControl {
    constructor() { }

    public async visualizarProducto(req : Request, res : Response, fun : Function) {
        let result = null;
        try {
            result = await productomodel.buscarProductos()
            res.status(200).json({
                res : result
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }

    public async verproductoFto(req : any, res : Response, fun : Function) {
        const usId = req.params.userId
        const usIm = req.params.img

        const fyleSystem : FileSystem = new FileSystem();
        const pathFoto = fyleSystem.getFotoUrl(usId, usIm)

        res.sendFile(pathFoto)
    }
}

const productocontrol: productoControl = new productoControl()
export default productocontrol