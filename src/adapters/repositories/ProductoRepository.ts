// adapters/repositories/ProductoRepository.ts
import { IProductoRepository } from '../../application/ports/IProductoRepository';
import { Producto } from '../../domain/entities/Producto';
import { getConnection } from '../dbConfig';

export class ProductoRepository implements IProductoRepository {
  async guardarProducto(producto: Producto): Promise<void> {
    const connection = getConnection();
    await connection.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [producto.nombre, producto.precio]);
  }

  async obtenerProductos(): Promise<Producto[]> {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM productos');
    return rows as Producto[];
  }
}
