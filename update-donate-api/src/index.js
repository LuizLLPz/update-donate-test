import App from "express";
import { config } from "dotenv-safe";
import cors from "cors";
import { apiHandler } from "./api/master.js";

async function main() {
    config();
    corsOptions = {
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

    app.get("/api*", (req, res) => {
        apiHandler(req, res);
    });

}


try {
  main();
}
catch (e) {
    console.error(e);
}