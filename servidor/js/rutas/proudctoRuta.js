"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productoControl_1 = __importDefault(require("../controlador/productoControl"));
const express_1 = __importDefault(require("express"));
class productoRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.verProducto();
    }
    verProducto() {
        this.routes.route('/').get(productoControl_1.default.visualizarProducto);
    }
    getRoutes() {
        return this.routes;
    }
}
const productoruta = new productoRuta();
const productoruta_ = productoruta.getRoutes();
exports.default = productoruta_;
