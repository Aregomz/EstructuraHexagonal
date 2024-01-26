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
// adapters/controllers/ProductoController.ts
const ProductoRepository_1 = require("../repositories/ProductoRepository");
const CrearProducto_1 = require("../../application/use-cases/CrearProducto");
const Producto_1 = require("../../domain/entities/Producto");
const productoRepository = new ProductoRepository_1.ProductoRepository();
const crearProductoUseCase = new CrearProducto_1.CrearProducto(productoRepository);
class ProductoController {
    static obtenerProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productos = yield productoRepository.obtenerProductos();
                return productos;
            }
            catch (error) {
                console.error('Error al obtener productos:', error);
                throw error;
            }
        });
    }
    static crearProducto(nombre, precio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Supongamos que el ID se genera automáticamente en el constructor de Producto
                const nuevoProducto = new Producto_1.Producto('', nombre, precio); // Deja el ID en blanco para que se genere automáticamente
                yield crearProductoUseCase.execute(nuevoProducto);
            }
            catch (error) {
                console.error('Error al crear producto:', error);
                throw error;
            }
        });
    }
}
exports.default = ProductoController;
