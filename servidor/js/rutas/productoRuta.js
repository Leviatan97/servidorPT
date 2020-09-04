"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productoControl_1 = __importDefault(require("../controlador/productoControl"));
class prodRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.verProducto();
        this.verProductoFto();
    }
    verProducto() {
        this.routes.route('/verproducto').get(productoControl_1.default.visualizarProducto);
    }
    verProductoFto() {
        this.routes.get('/producto/:userId/:img', productoControl_1.default.verproductoFto);
    }
    getRoutes() {
        return this.routes;
    }
}
const producto = new prodRuta();
const producto_ = producto.getRoutes();
exports.default = producto_;
