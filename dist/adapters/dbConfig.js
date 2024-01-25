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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = exports.connectDatabase = void 0;
// adapters/dbConfig.ts
const promise_1 = require("mysql2/promise");
let connection;
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    connection = yield (0, promise_1.createConnection)({
        host: 'localhost',
        user: 'root',
        password: 'ArellunasM13',
        database: 'hexagonal',
    });
});
exports.connectDatabase = connectDatabase;
const getConnection = () => {
    if (!connection) {
        throw new Error('Conexión a la base de datos no establecida.');
    }
    return connection;
};
exports.getConnection = getConnection;
