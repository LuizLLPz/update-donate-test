export default class Post {
    static get = async (_, res, conn) => {
        if (res.body.uid) {
            return res.json(await conn.schema.raw(`SELECT * FROM Post INNER JOIN User ON Post.uid=User.id where uid=${res.body.uid};`));
        }
        return res.json(await conn.schema.raw(`SELECT * FROM Post INNER JOIN User ON Post.uid=User.id;`));
    };

    static post = async (req, res, conn) => {
        console.log(req.body);
        if (req.body.titulo && req.body.categoria && req.body.corpo) {
            return res.json(await conn.insert(req.body).into('Post'));
        } else {
            return res.status(400).json({ error: 'Informações inválidas' });
        }
    }
}