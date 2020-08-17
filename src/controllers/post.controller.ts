import {Request, Response} from 'express';

import {connect} from '../database';

class PostController{

    public post(req: Request, res: Response){
        res.json({
            texto: 'post is start'
        });
    }

    public async getPost(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const post = await conne.query('SELECT * FROM posts');
        return res.json(post[0]);
    }

}

export const postController = new PostController();

