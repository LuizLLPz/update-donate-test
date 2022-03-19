import App from "express";
import { config } from "dotenv-safe";

async function main() {
    config();
    const app = App();
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });
   app.get("/", (_, res) => {
        res.send("Início");
    });
}


try {
  main();
}
catch (e) {
    console.error(e);
}