// adapters/repositories/UsuarioRepository.ts
import { IUsuarioRepository } from '../../application/ports/IUsuarioRepository';
import { Usuario } from '../../domain/entities/Usuario';
import { getConnection } from '../dbConfig';

export class UsuarioRepository implements IUsuarioRepository {
  async guardarUsuario(usuario: Usuario): Promise<void> {
    const connection = getConnection();
    await connection.query('INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [usuario.nombre, usuario.email]);
  }

  async obtenerUsuarios(): Promise<Usuario[]> {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM usuarios');
    return rows as Usuario[];
  }
}
