"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoriaControl_1 = __importDefault(require("../controlador/categoriaControl"));
class categoriaRuta {
    constructor(router = express_1.default()) {
        this.router = router;
    }
    verCategorias() {
        return this.router.route('/categoria').get(categoriaControl_1.default.verCategorias);
    }
    getRoutes() {
        return this.router;
    }
}
const categoriaruta = new categoriaRuta();
const categoriaRta = categoriaruta.getRoutes();
exports.default = categoriaRta;
