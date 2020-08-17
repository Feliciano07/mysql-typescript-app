"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', post_controller_1.postController.post);
        this.router.get('/get', post_controller_1.postController.getPost);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
