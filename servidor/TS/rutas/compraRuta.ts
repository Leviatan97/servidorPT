import compractrl from "../controlador/compraControl";
import Routes from 'express';


class compraRuta {
    constructor(private routes = Routes()) {
        this.registrarVenta()
    }

    public registrarVenta() {
        this.routes.route('/compra').post(compractrl.registrarCompra)
    }
    
    public getRoutes()
    {
        return this.routes
    }
}

const compraruta : compraRuta = new compraRuta()
const compraRta = compraruta.getRoutes()
export default compraRta