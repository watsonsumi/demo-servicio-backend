import Router from "express";
import cors from 'cors';
// import { registroList } from "../controllers/registro.controller";
import { mercadoPago, registroList } from "../controllers/mepa.controller.js";
const router = Router();

export const mepaRoutes = (app) => {

    app.use(cors());
    app.use("/api", router);
    router.post("/login", mercadoPago);
    router.post("/registro", registroList);
};