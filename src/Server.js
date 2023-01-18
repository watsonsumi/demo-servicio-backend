import express from "express";
import morgan from "morgan";
import { mepaRoutes } from "./routes/mepa.routes.js";
// const morgan = require('morgan');
// import { DBConnection } from "./config/dbConnectMySql";
export class Server {
    app;
    port;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 9000;
        // this.dbConntection();
        this.middlewares();
        this.routes();
    }
    async dbConntection() {
        await DBConnection();
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
    }
    routes() {
        mepaRoutes(this.app);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(
                `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`
            );
        });
    }
}