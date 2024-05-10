import mysql2 from 'mysql2';

// Conexao com o banco
const db = mysql2.createPool({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "pdABqKSTcEmYNKjxSxhYsSsljScBKNhj",
    database: "railway",
    connectTimeout: 30000,
    port: '28801'
});


export default db;