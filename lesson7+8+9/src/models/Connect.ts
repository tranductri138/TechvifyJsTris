
// import mysql, { ConnectionConfig } from 'mysql';
import params from '../config/mysql';

const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        console.log(params);
        const connection = mysql.createConnection(<ConnectionConfig>params);
        connection.connect((error) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(connection);
        });
    });

const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });

export { Connect, Query };
