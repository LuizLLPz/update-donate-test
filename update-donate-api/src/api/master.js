import { conn } from '../index.js';
export const apiHandler = async (req, res) => {
    const pattern = req.url.substr(4);
    if (pattern == '/posts') {
        const result = await conn.select().table('post');
        res.json(result);
    }
}

