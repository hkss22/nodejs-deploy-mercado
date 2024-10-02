import mysql2 from 'mysql2';

// Conexao com o banco
const db = mysql2.createPool({
    host: "junction.proxy.rlwy.net",
    user: "root",
    password: "oKNyyamtumlmRHleYOrUyOAebQyfAySz",
    database: "railway",
    connectTimeout: 30000,
    port: '26048'
});


export default db;
