"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compraControl_1 = __importDefault(require("../controlador/compraControl"));
const express_1 = __importDefault(require("express"));
class compraRuta {
    constructor(routes = express_1.default()) {
        this.routes = routes;
        this.registrarVenta();
    }
    registrarVenta() {
        this.routes.route('/compra').post(compraControl_1.default.registrarCompra);
    }
    getRoutes() {
        return this.routes;
    }
}
const compraruta = new compraRuta();
const compraRta = compraruta.getRoutes();
exports.default = compraRta;
