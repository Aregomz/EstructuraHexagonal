"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
// domain/entities/Producto.ts
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
exports.Producto = Producto;
