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
// adapters/controllers/UsuarioController.ts
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
const CrearUsuario_1 = require("../../application/use-cases/CrearUsuario");
const Usuario_1 = require("../../domain/entities/Usuario");
const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
const crearUsuarioUseCase = new CrearUsuario_1.CrearUsuario(usuarioRepository);
class UsuarioController {
    static obtenerUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield usuarioRepository.obtenerUsuarios();
                return usuarios;
            }
            catch (error) {
                console.error('Error al obtener usuarios:', error);
                throw error;
            }
        });
    }
    static crearUsuario(nombre, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Supongamos que el ID se genera automáticamente en el constructor de Usuario
                const nuevoUsuario = new Usuario_1.Usuario('', nombre, email); // Deja el ID en blanco para que se genere automáticamente
                yield crearUsuarioUseCase.execute(nuevoUsuario);
            }
            catch (error) {
                console.error('Error al crear usuario:', error);
                throw error;
            }
        });
    }
}
exports.default = UsuarioController;
