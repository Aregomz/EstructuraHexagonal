"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrearUsuario_1 = require("../../application/use-cases/CrearUsuario");
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
const dbConfig_1 = require("../dbConfig"); // conexion
// Conectar a la base de datos al iniciar la aplicación
(0, dbConfig_1.connectDatabase)();
const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
const crearUsuarioUseCase = new CrearUsuario_1.CrearUsuario(usuarioRepository);
