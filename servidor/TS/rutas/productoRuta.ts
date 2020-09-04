import Routes from 'express';
import productocontrol from '../controlador/productoControl';

class prodRuta
{
    constructor(private routes = Routes()) {
        this.verProducto()
        this.verProductoFto()
    }

    public verProducto(){
        this.routes.route('/verproducto').get(productocontrol.visualizarProducto)
    }

    public verProductoFto() 
    {
        this.routes.get('/producto/:userId/:img',productocontrol.verproductoFto)
    }

    public getRoutes()
    {
        return this.routes
    }
}

const producto : prodRuta = new prodRuta()
const producto_ = producto.getRoutes()
export default producto_