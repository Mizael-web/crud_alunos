const {alunos} = require ("./alunos" );

function editarAluno (matricula, novoNome, novoTelefone, novoEmail) {
    try {
        const aluno = alunos.find (elementodoarray => 
         elementodoarray.matricula === matricula
    )
        if (aluno){
            aluno.nome = novoNome,
            aluno.telefone =novoTelefone,
            aluno.email = novoEmail
            console.log (" Aluno editado com sucesso" )
        }else {
        console.log (" Aluno não encontrado")
        }

    } catch (error) { 
        console.error ( "Erro ao editar aluno", error.message)           
    }   
            
}
module.exports = {editarAluno};