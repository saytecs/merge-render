import express from 'express';
import cors from 'cors';
import pg from 'pg';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, FRONTEND_URL, PORT} 
from './config.js';

const app = express();
const client = new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
  //  password: '',
    port: DB_PORT,
});

// Intentar conectar a la base de datos
/*client.connect()
    .then(() => {
        console.log('Conexión a PostgreSQL exitosa');
    })
    .catch(err => {
        console.error('Error al conectar a PostgreSQL:', err);
    })
    .finally(() => {
        // Cerrar la conexión si es necesario
        client.end();
    });*/

app.use(cors({
    origin: FRONTEND_URL
 }))

app.get('/ping', async (req,res) => {

    const result = await client.query("SELECT NOW()")
    console.log(result);
    res.send({
        pong : result.rows[0]
        ,
    });
});

app.listen(PORT,() => {
    console.log("server started on port", PORT);
} )
