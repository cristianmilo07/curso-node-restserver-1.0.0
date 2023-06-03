import express from 'express';
 
class Server {
 
    constructor(){
 
        this.app = express();
 
        this.routes();
    }
 
    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hola mundo');
        });
    }
 
    listener(){
        this.app.listen(8080)
    }
}
 
export { Server }