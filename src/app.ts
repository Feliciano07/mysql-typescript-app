import express, { Application } from 'express';
import morgan from 'morgan';

export class App{

    private app: Application

    //port ? puede ser tipo numero o string (union type) pueden recibir o no
    constructor(private port ? : number | string){

        this.app = express();
        this.settings()
        this.middlewares();
    }

    // setea puerto en port
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'))
    }


    /*  asyn await se usa para decir que va tomar un tiempo para ejecutar
        luego de eso muestra el mensaje
    */
    async listen(){
        await this.app.listen(
            this.app.get('port')
        );
        // obtiene la propieda port
        console.log('Serve on port', this.app.get('port'))
    }

}