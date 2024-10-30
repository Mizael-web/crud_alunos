const { alunos } = require("./alunos");

function editarAluno(matricula, novoNome, novoEmail, novoTelefone) {
    try {
        // Função para encontrar um aluno
        const aluno = alunos.find(elementodoarray => 
            elementodoarray.matricula === matricula
        )
        // verificar se o aluno procurado existe
        if (aluno) {
            aluno.nome = novoNome
            aluno.email = novoEmail
            aluno.telefone = novoTelefone
            console.log("Aluno editado com sucesso!");
        } else {
            console.log("Aluno não encontrado")
        }
    } catch (error) {
        console.error("Erro ao editar um aluno", error.message)
    }
}

module.exports = { editarAluno };