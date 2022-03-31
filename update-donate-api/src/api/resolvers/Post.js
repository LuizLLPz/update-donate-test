export default class Post {
    static get = async (req, res, conn) => {
        return res.json(await conn.schema.raw(`SELECT * FROM Post INNER JOIN User ON Post.uid=User.id;`));
    };

    static post = async (req, res, conn) => {
        console.log(req.body);
        if (req.body.uid && !req.body.titulo) {
            console.log("OK");
            return res.json(await conn.schema.raw(`SELECT * FROM Post INNER JOIN User ON Post.uid=User.id where uid=${req.body.uid};`));
        }
        if (req.body.titulo && req.body.categoria && req.body.corpo) {
            return res.json(await conn.insert(req.body).into('Post'));
        } else {
            return res.status(400).json({ error: 'Informações inválidas' });
        }
    }
}