import { conn } from '../index.js';

const patterns = {
    '/posts' : async() => {
        return await conn.select().table('post');
    } 
}


export const apiHandler = async (req, res) => {
    const pattern = req.url.substr(4);
    res.json(await patterns[pattern]());
}

