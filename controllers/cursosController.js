const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const cursoController = {

  cadastrarCurso( req, res ){
    const { titulo, descricao, professor } = req.body;

    if(!titulo || !descricao || !professor){
      return res.status(400).json({error: "Dados incorretos. Tente novamente!"});
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

      res.status(201).json({message: "Cadastrado com sucesso!"});
    },
}

module.exports = cursoController;