import express from "express";
import { getworks,createworks,updateworks,deleteworks } from "../controllers/works.js";
const routes =  express.Router();

routes.get('/',getworks);
routes.post('/',createworks);
routes.patch('/:id',updateworks);
routes.delete('/:id',deleteworks);

export default routes;