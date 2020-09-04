"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriaModel_1 = __importDefault(require("../modelo/categoriaModel"));
class categoriaControl {
    constructor() { }
    verCategorias(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            try {
                result = yield categoriaModel_1.default.buscarCategoria();
                res.status(200).json({
                    respuesta: true,
                    resultado: result
                });
            }
            catch (error) {
                res.status(200).json({
                    respuesta: false,
                    resultado: error
                });
            }
        });
    }
}
const categoriactrl = new categoriaControl();
exports.default = categoriactrl;
