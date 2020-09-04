"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const productoRuta_1 = __importDefault(require("./rutas/productoRuta"));
const ventaRuta_1 = __importDefault(require("./rutas/ventaRuta"));
const compraRuta_1 = __importDefault(require("./rutas/compraRuta"));
const categoriaRutas_1 = __importDefault(require("./rutas/categoriaRutas"));
class main {
    constructor() {
        this.app = express_1.default();
        this.configuracionInicial();
        this.Rutas();
        this.configuracionDePuertos();
    }
    configuracionInicial() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    Rutas() {
        this.app.use(productoRuta_1.default);
        this.app.use(ventaRuta_1.default);
        this.app.use(compraRuta_1.default);
        this.app.use(categoriaRutas_1.default);
    }
    configuracionDePuertos() {
        this.app.set('port', 5000);
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`);
        });
    }
}
const main_ = new main();
