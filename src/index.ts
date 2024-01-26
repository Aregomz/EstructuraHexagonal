// En 'index.ts'
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const UsuarioController = require('./adapters/controllers/UsuarioController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/usuarios', async (req: Request, res: Response) => {
  try {
    const usuarios = await UsuarioController.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

app.post('/usuarios', async (req: Request, res: Response) => {
  const { nombre, edad } = req.body;

  try {
    const nuevoUsuario = await UsuarioController.crearUsuario(nombre, edad);
    res.json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
