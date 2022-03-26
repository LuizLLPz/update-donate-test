import { conn } from '../index.js';
const possiveis = [
    'Postagem teste',
    'Um post diferenciado',
    'Texto novo e diferente',
    'Nova postagem no forum',
    'Texto de spam gerado',
    'Propaganda nova no website',
    'Ligação de telemarketing',
    'Gerado de novo',
]

const patterns = {

    '/post' : async() => {
        return await conn.select().table('post');
    },
    '/createPost' : async() => {
        const titulo = possiveis[Math.trunc(Math.random()*possiveis.length)];
        return await conn('post').insert({
            titulo,
            categoria: 'Hardware e Software', 
            corpo: 'Postagem teste'
    })
    }
}


export const apiHandler = async (req, res) => {
    const pattern = req.url.substr(4);
    res.json(await patterns[pattern]());
}