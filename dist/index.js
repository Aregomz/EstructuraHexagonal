"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UsuarioController_1 = __importDefault(require("./adapters/controllers/UsuarioController"));
const dbConfig_1 = require("./adapters/dbConfig");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get('/usuarios', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Entrando en la ruta /usuarios');
        const usuarios = yield UsuarioController_1.default.obtenerUsuarios();
        console.log('Usuarios obtenidos correctamente:', usuarios);
        res.json(usuarios);
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        next(error);
    }
}));
app.post('/usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email } = req.body;
    try {
        yield UsuarioController_1.default.crearUsuario(nombre, email);
        res.json({ mensaje: 'Usuario creado exitosamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}));
app.use((err, req, res, next) => {
    console.error('Error en la aplicación:', err.stack);
    res.status(500).send('Something went wrong!');
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbConfig_1.connectDatabase)(); // Asegúrate de llamar a la conexión a la base de datos antes de iniciar el servidor
    console.log(`Server is running at http://localhost:${port}`);
}));
