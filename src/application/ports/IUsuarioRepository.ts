// application/ports/IUsuarioRepository.ts
import { Usuario } from '../../domain/entities/Usuario';

export interface IUsuarioRepository {
  guardarUsuario(usuario: Usuario): Promise<void>;
  obtenerUsuarios(): Promise<Usuario[]>;
}
