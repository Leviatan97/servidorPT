import Routes from 'express';
import categoriactrl from '../controlador/categoriaControl';

class categoriaRuta {
    constructor(private router = Routes()) {
        
    }

    public verCategorias() {
        return this.router.route('/categoria').get(categoriactrl.verCategorias)
    }

    public getRoutes()
    {
        return this.router
    }
}

const categoriaruta : categoriaRuta = new categoriaRuta();
const categoriaRta = categoriaruta.getRoutes()
export default categoriaRta