"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ventaControl_1 = __importDefault(require("../controlador/ventaControl"));
class ventaRuta {
    constructor(router = express_1.default()) {
        this.router = router;
        this.registrarVenta();
    }
    registrarVenta() {
        this.router.route('/venta').post(ventaControl_1.default.registrarVenta);
    }
    getRoutes() {
        return this.router;
    }
}
const ventaruta = new ventaRuta();
const ventaRta = ventaruta.getRoutes();
exports.default = ventaRta;
