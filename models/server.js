import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.js';
 
class Server {
 
    constructor(){
 
        this.app = express();
        this.usuarioPath = '/api/usuarios';
 
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }
 
    routes(){
        this.app.use(this.usuarioPath, router);
    }
 
    listener(){
        this.app.listen(8080)
    }
}
 
export { Server }