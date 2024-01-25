// adapters/dbConfig.ts
import { createConnection, Connection } from 'mysql2/promise';

let connection: Connection;

export const connectDatabase = async (): Promise<void> => {
  connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ArellunasM13',
    database: 'hexagonal',
  });
};

export const getConnection = (): Connection => {
  if (!connection) {
    throw new Error('Conexión a la base de datos no establecida.');
  }
  return connection;
};
