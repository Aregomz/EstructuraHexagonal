// adapters/controllers/UsuarioController.ts
import { Request, Response } from 'express';
import { CrearUsuario } from '../../application/use-cases/CrearUsuario';
import { ObtenerUsuarios } from '../../application/use-cases/ObtenerUsuarios';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { Usuario } from '../../domain/entities/Usuario';
import { connectDatabase } from '../dbConfig';  // Importar la función de conexión

// Conectar a la base de datos al iniciar la aplicación
connectDatabase();

const usuarioRepository = new UsuarioRepository();
const crearUsuarioUseCase = new CrearUsuario(usuarioRepository);
