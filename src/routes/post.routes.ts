import {Router} from 'express'

import {postController} from '../controllers/post.controller'


class PostRoutes{

    public router = Router();

    constructor(){
        this.config();
    }


    config (): void{
        this.router.get('/',postController.post)

        this.router.get('/get',postController.getPost);

        this.router.post('/crear',postController.createPost);

        this.router.get('/obtener/:id', postController.Obtener)

        this.router.delete('/eliminar/:id',postController.Eliminar);

        this.router.put('/actu/:id',postController.Actualizar);
    }


}

const postRoutes = new PostRoutes();

export default postRoutes.router;
