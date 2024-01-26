// index.ts
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import UsuarioController from './adapters/controllers/UsuarioController';
import { connectDatabase } from './adapters/dbConfig';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/usuarios', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Entrando en la ruta /usuarios');
    const usuarios = await UsuarioController.obtenerUsuarios();
    console.log('Usuarios obtenidos correctamente:', usuarios);
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    next(error);
  }
});

app.post('/usuarios', async (req: Request, res: Response) => {
  const { nombre, email } = req.body;

  try {
    await UsuarioController.crearUsuario(nombre, email);
    res.json({ mensaje: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error en la aplicación:', err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, async () => {
  await connectDatabase(); // Asegúrate de llamar a la conexión a la base de datos antes de iniciar el servidor
  console.log(`Server is running at http://localhost:${port}`);
});
