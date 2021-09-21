
import { getConnectionManager, ConnectionManager, Connection } from "typeorm";

const connectionManager = new ConnectionManager();
const connection = connectionManager.create({
    type: "mysql",
    host: "localhost",
    port: 3303,
    username: "root",
    password: "password",
    database: "shopedb",
});

async function Connect() {
    await connection.connect(); // performs connection
}