import express, { Application } from 'express';

export class App{

    private app: Application

    constructor(){

        this.app = express();
    }

    // asyn await se usa para decir que va tomar un tiempo para ejecutar
    //luego de eso muestra el mensaje
    async listen(){
        await this.app.listen(
            3000
        );
        console.log('Serve on port',3000)
    }

}