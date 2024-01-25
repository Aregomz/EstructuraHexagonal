// application/use-cases/ObtenerUsuarios.ts
import { Usuario } from '../../domain/entities/Usuario';
import { IUsuarioRepository } from '../ports/IUsuarioRepository';

export class ObtenerUsuarios {
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(): Promise<Usuario[]> {
    return this.usuarioRepository.obtenerUsuarios();
  }
}
