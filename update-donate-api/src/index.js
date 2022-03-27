import App from "express";
import { config } from "dotenv-safe";
import cors from "cors";
import routes from "./api/routes.js";

async function main() {
    config();
    const app = App();
    app.use(cors({origin: process.env.CONTENT_ORIGIN}));
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });
    app.use(App.json());
    app.use(routes);
}


try {
  main();
}
catch (e) {
    console.error(e);
}
