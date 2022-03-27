import knex from "knex";
import knexfile from "../knexfile.js";
import { Router } from "express";
import Post from "./resolvers/Post.js";

const conn = knex(knexfile['development']);
const routes = Router();

routes.get("/api/post", (req, res) => Post.get(req, res, conn));

export default routes;