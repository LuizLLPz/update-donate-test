import App from "express";
import { config } from "dotenv-safe";
import cors from "cors";
import routes from "./api/routes.js";

const corsOptions = {
    origin: process.env.CONTENT_ORIGIN,
    optionsSuccessStatus: 200
};

async function main() {
    config();
    const app = App();
    app.use(cors(corsOptions));
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
