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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepository = void 0;
const dbConfig_1 = require("../dbConfig");
class ProductoRepository {
    guardarProducto(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = (0, dbConfig_1.getConnection)();
            yield connection.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [producto.nombre, producto.precio]);
        });
    }
    obtenerProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = (0, dbConfig_1.getConnection)();
            const [rows] = yield connection.query('SELECT * FROM productos');
            return rows;
        });
    }
}
exports.ProductoRepository = ProductoRepository;
