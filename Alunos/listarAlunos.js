const {alunos} = require ("./alunos" );

function listarAluno(){
    try {
        alunos.forEach((alunos) => { 
            console.table (alunos)
        })
    } catch (error){
           console.error("erro ao listar alunos", error.message);           
    } 
}        
        
module.exports = {listarAluno }; 