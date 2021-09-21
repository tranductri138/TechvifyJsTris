import config from './config';

const params = {
    user: config.mysql.user,
    password: config.mysql.pass,
    port: 3303,
    host: config.mysql.host,
    database: config.mysql.database
};
export default { params }

