"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
// domain/entities/Usuario.ts
class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}
exports.Usuario = Usuario;
