// adapters/controllers/ProductoController.ts
import { ProductoRepository } from '../repositories/ProductoRepository';
import { CrearProducto } from '../../application/use-cases/CrearProducto';
import { Producto } from '../../domain/entities/Producto';

const productoRepository = new ProductoRepository();
const crearProductoUseCase = new CrearProducto(productoRepository);

class ProductoController {
  static async obtenerProductos(): Promise<Producto[]> {
    try {
      const productos = await productoRepository.obtenerProductos();
      return productos;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  }

  static async crearProducto(nombre: string, precio: number): Promise<void> {
    try {
      // Supongamos que el ID se genera automáticamente en el constructor de Producto
      const nuevoProducto = new Producto('', nombre, precio); // Deja el ID en blanco para que se genere automáticamente
      await crearProductoUseCase.execute(nuevoProducto);
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  }
}

export default ProductoController;
