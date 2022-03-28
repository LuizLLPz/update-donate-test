import knex from "knex";
import argon2 from "argon2"; 

export default class User {
    static get = async (req, res, conn) => {
        return res.json (await conn.select().from('User'));
    }

    static post = async (req, res, conn) => {

        if (!req.body.nome && !req.body.email && !req.body.password && !req.body.cpf) {
            return res.status(400).json({ error: 'Solicitação inválida' });
        }
        let {password, email, nome, cpf} = req.body;
        password = await argon2.hash(req.body.password);
        res.json(await conn.insert({password, email, nome, cpf}).into('User'));
       
    }

    static login = async (req, res, conn) => {
        let { password, email } = req.body;
        const user = await conn.select().from('User').where({ email });
        if (!user.length) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }
        const validPassword = await argon2.verify(user[0].password, password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Senha incorreta' });
        }
        return res.json(user);
    }
}