/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
/***FICHERO DE RUTAS */
import { Router } from "express";
import { CharacterController } from "../controller/CharacterController";
import auth from "./auth";
import user from "./user";
import character from "./character";
import friends from "./friend";

const routes = Router();

routes.use("/auth", auth);
routes.use("/character", character);
routes.use("/favorites", CharacterController.getAllFavorites);
routes.use("/users", user);
routes.use("/friends", friends);

export default routes;
