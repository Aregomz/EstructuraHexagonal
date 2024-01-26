// adapters/controllers/UsuarioController.ts
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { CrearUsuario } from '../../application/use-cases/CrearUsuario';
import { Usuario } from '../../domain/entities/Usuario';

const usuarioRepository = new UsuarioRepository();
const crearUsuarioUseCase = new CrearUsuario(usuarioRepository);

class UsuarioController {
  static async obtenerUsuarios(): Promise<Usuario[]> {
    try {
      const usuarios = await usuarioRepository.obtenerUsuarios();
      return usuarios;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  static async crearUsuario(nombre: string, email: string): Promise<void> {
    try {
      // Supongamos que el ID se genera automáticamente en el constructor de Usuario
      const nuevoUsuario = new Usuario('', nombre, email); // Deja el ID en blanco para que se genere automáticamente
      await crearUsuarioUseCase.execute(nuevoUsuario);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }
}

export default UsuarioController;
