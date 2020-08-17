import {Request, Response} from 'express';

import {connect} from '../database';

import {Post} from '../interface/post.interface';

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

    public async createPost(req: Request, res: Response): Promise<Response> {
        const newPos: Post = req.body;
        //console.log(newPos);
        
        const conne = await connect();
        await conne.query('INSERT INTO posts SET ?', [newPos]);

        return res.json({
            text: 'publicacion creada'
        });
    }
}

export const postController = new PostController();

