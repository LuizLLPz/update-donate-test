export default class Post {
    static get = async (_, res, conn) => {
        return res.json(await conn.select().from('Post'));
    };

    static post = async (req, res, conn) => {
        if (req.body) {
            return res.json(await conn.insert(req.body).into('Post'));
        } else {
            return res.status(400).json({ error: 'Informações inválidas' });
        }
    }
}