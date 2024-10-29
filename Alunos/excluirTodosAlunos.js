const {alunos } = require ("./alunos");

function excluiTodosAlunos () {

    try {
        alunos.length = 0
        
    } catch (error){

     (" erro ao excluir todos os alunos!")
        
    }
}

  module.exports = { excluiTodosAlunos };