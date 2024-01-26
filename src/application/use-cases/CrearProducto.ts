// application/use-cases/CrearProducto.ts
import { IProductoRepository } from '../ports/IProductoRepository';
import { Producto } from '../../domain/entities/Producto';

export class CrearProducto {
  constructor(private readonly productoRepository: IProductoRepository) {}

  async execute(producto: Producto): Promise<void> {
    // Puedes agregar lógica adicional aquí antes de guardar el producto
    await this.productoRepository.guardarProducto(producto);
  }
}
