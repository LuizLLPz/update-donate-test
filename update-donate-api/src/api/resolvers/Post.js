export default class Post {
    static get = async (req, res, conn) => {
        return res.json(await conn.schema.raw(`SELECT p.titulo,p.categoria,p.corpo,p.created_at,p.pid, u.nome, COUNT(p2.pid) as respostas
        FROM
            Post p INNER JOIN User as u on u.id = p.uid LEFT JOIN
            Post p2 ON p.id = p2.pid
        where p.pid is NULL
        GROUP BY p.id
       
        order by p.id desc;`));
    };

    static post = async (req, res, conn) => {
        if (req.body.uid && !req.body.titulo) {
            return res.json(await conn.schema.raw(`SELECT * FROM Post INNER JOIN User ON Post.uid=User.id where uid=${req.body.uid}
            order by Post.id desc   
            ;`));
        }
        if (req.body.titulo && req.body.categoria && req.body.corpo) {
            return res.json(await conn.insert(req.body).into('Post'));
        } else {
            return res.status(400).json({ error: 'Informações inválidas' });
        }
    }
}