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

    }


}

const postRoutes = new PostRoutes();

export default postRoutes.router;
