const {alunos} = require ("./alunos" );

function listarAluno(){
    try {
        alunos.forEach((aluno) => { 
            console.table (aluno)
        })
    } catch (error){
           console.error("erro ao listar alunos", error.message);           
    } 
}     ;    
        
module.exports = {listarAluno }; 