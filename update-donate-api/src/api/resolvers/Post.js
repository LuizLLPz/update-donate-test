export default class Post {
    static get = async (req, res, conn) => {
        let data = await conn.schema.raw(`SELECT p.id, p.titulo,p.categoria,p.corpo,p.created_at,p.pid, u.nome, COUNT(p2.pid) as respostas
        FROM
            Post p INNER JOIN User as u on u.id = p.uid LEFT JOIN
            Post p2 ON p.id = p2.pid
        where p.pid is NULL
        GROUP BY p.id
       
        order by p.id desc;`);
        return res.json(data[0]);
    };

    static post = async (req, res, conn) => {

        if (req.body.corpo && req.body.uid && req.body.pid) {
            const post = await conn.schema.raw(`INSERT INTO Post (titulo, categoria, corpo, uid, pid) 
            VALUES ('Resposta', 'Hardware & Software', '${req.body.corpo}', ${req.body.uid}, ${req.body.pid})`);
            return res.json(post);
        }


        if(req.body.pid) {
            const post = await conn.schema.raw(`SELECT p.id, p.titulo,p.categoria,p.corpo,p.created_at,p.pid, u.nome, COUNT(p2.pid) as respostas
            FROM
                Post p INNER JOIN User as u on u.id = p.uid LEFT JOIN
                Post p2 ON p.id = p2.pid
            where p.id = ${req.body.pid}
            GROUP BY p.id
           
            order by p.id desc;`); 
            const respostas = await conn.schema.raw(`SELECT p.corpo, p.created_at, u.nome from Post p inner join User u on u.id = p.uid where p.pid = ${req.body.pid}`);
            return res.json({post: post[0], respostas: respostas[0]});
        }

        
        if (req.body.uid && !req.body.titulo) {
            const post = await (conn.schema.raw(`SELECT Post.id, Post.titulo, Post.categoria, Post.created_at, User.nome FROM Post INNER JOIN User ON Post.uid=User.id where uid=${req.body.uid}
            and Post.pid is null
            order by Post.id desc   
            ;`));
            return res.json(post);
        }

        if (req.body.corpo && req.body.uid && req.body.pid) {
            const post = await conn.schema.raw(`INSERT INTO Post (corpo, uid, pid) VALUES ('${req.body.corpo}', ${req.body.uid}, ${req.body.pid})`);
            return res.json(post);
        }

        if (req.body.titulo && req.body.categoria && req.body.corpo) {
            return res.json(await conn.insert(req.body).into('Post'));
        } else {
            return res.status(400).json({ error: 'Informações inválidas' });
        }
    }
}