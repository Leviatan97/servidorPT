import Routes from 'express';
import ventacrtl from '../controlador/ventaControl';

class ventaRuta {
    constructor(private router= Routes()) {
        this.registrarVenta()
    }

    public registrarVenta() {
        this.router.route('/venta').post(ventacrtl.registrarVenta)
    }

    public getRoutes()
    {
        return this.router
    }
}

const ventaruta: ventaRuta = new ventaRuta()
const ventaRta = ventaruta.getRoutes()
export default ventaRta
