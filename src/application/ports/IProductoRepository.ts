// application/ports/IProductoRepository.ts
import { Producto } from '../../domain/entities/Producto';

export interface IProductoRepository {
  guardarProducto(producto: Producto): Promise<void>;
  obtenerProductos(): Promise<Producto[]>;
}
