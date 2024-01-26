// application/use-cases/ObtenerProductos.ts
import { Producto } from '../../domain/entities/Producto';
import { IProductoRepository } from '../ports/IProductoRepository';

export class ObtenerProductos {
  constructor(private readonly productoRepository: IProductoRepository) {}

  async execute(): Promise<Producto[]> {
    return this.productoRepository.obtenerProductos();
  }
}
