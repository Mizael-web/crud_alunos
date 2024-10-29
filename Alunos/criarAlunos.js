const { alunos } = require("./alunos");

var validator = require("validator");



function criarAluno(matricula, nome, telefone, email) {
   const novoAluno = {
      matricula,
      nome,
      telefone,
      email
   }


   try {

      if (!validator.isEmail(email)) {
         console.erro(" o e-mail informado é invalido")

         return
      }

      if (
         validator.isEmpty(matricula) ||
         validator.isEmpty(nome) ||
         validator.isEmpty(telefone)

      ) {
         console.log("Todos os campos devem ser preenchidos")
         return
      }
      alunos.push(novoAluno)
   }

   catch (error) {
      ("error ao cadastrar dados", error.mensage);
   }
}
module.exports = { criarAluno };