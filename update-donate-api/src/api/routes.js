import knex from "knex";
import knexfile from "../knexfile.js";
import { Router } from "express";
import Post from "./resolvers/Post.js";
import User from "./resolvers/User.js";
const conn = knex(knexfile['development']);
const routes = Router();

routes.get("/api/post", (req, res) => Post.get(req, res, conn));
routes.post("/api/post", (req, res) => Post.post(req, res, conn));
routes.get("/api/user", (req, res) => User.get(req, res, conn));
routes.post("/api/user", (req, res) => User.post(req, res, conn));
routes.post("/api/user/login", (req, res) => User.login(req,res,conn));

routes.get("/api/postd", async (req, res) => {
    await conn.truncate('Post');
    return res.json("message: Postagens apagadas apenas para teste")
}); 
export default routes;