const express = require("express");
const routes = express.Router();
const cursosController = require("../controllers/cursosController");


routes.post("/cursos", cursosController.cadastrarCurso);

module.exports = routes;