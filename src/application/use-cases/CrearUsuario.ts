// application/use-cases/CrearUsuario.ts
import { Usuario } from '../../domain/entities/Usuario';
import { IUsuarioRepository } from '../ports/IUsuarioRepository';

export class CrearUsuario {
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(usuario: Usuario): Promise<void> {
    await this.usuarioRepository.guardarUsuario(usuario);
  }
}
