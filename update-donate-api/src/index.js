import App from "express";
import { config } from "dotenv-safe";
import cors from "cors";
import { apiHandler } from "./api/master.js";
import knex from "knex";
import knexfile from "./knexfile.js";

export const conn = knex(knexfile['development']);

async function main() {
    config();
   
    const corsOptions = {
        origin: process.env.CONTENT_ORIGIN,
        optionsSuccessStatus: 200
    };
    const app = App();
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });


   app.get("/", (_, res) => {
        res.send("Início");
    });

    app.get("/api*", cors(corsOptions), (req, res) => {
        apiHandler(req, res);
    });

}


try {
  main();
}
catch (e) {
    console.error(e);
}
