export default class Post {
    static get = async (_, res, conn) => {
        return res.json(await conn.select().from('Post'));
    };
}