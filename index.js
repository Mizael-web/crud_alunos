const prompt = require("prompt-sync")();
const { criarAluno } = require("./Alunos/criarAlunos")
const { editarAluno } = require("./Alunos/editarAluno")
const { excluirAlunos } = require("./Alunos/excluirAlunos")
const { listarAluno } = require("./Alunos/listarAlunos")
const { excluirTodosAlunos } = require("./Alunos/excluirTodosAlunos")

function exibirMenu() {

    console.log("1- criar Aluno")
    console.log("2- editar Aluno")
    console.log("3- Excluir Aluno")
    console.log("4- listar Aluno")
    console.log("5 - excluir Tdoos os alunos")
    console.log("9- sair")
    console.log("============================")
}
let opcao;
do {

    exibirMenu();
    opcao = parseInt(prompt("digite uma opção: "));
    let matricula;

    switch (opcao) {
        case 1:
            matricula = prompt("Digite a matricula:")
            let nome = prompt("Digite o nome: ")
            let email = prompt(" digite o e-mail: ")
            let telefone = prompt("Digite o telefone")
            criarAluno(matricula, nome, telefone, email)
            break;

        case 2:
            matricula = prompt("Digite a matricula: ")
            let novoNome = prompt("Digite o novo  nome: ")
            let novoEmail = prompt(" digite o novo e-mail: ")
            let novoTelefone = prompt("Digite o novo telefone")
            editarAluno(matricula, novoNome, novoTelefone, novoEmail)
            listarAluno()
            break;
        case 3:

            matricula = prompt("Digite a matricula:")
            excluirAlunos(matricula)
            excluirTodos();
            break;



        case 4:
            listarAluno()
            break;

        case 5:
            excluirTodosAlunos()
            break;


        case 9:
            console.log(" saindo do Sistema...")
            break;
        default:
            console.log(" valor invalido")



    }
} while (opcao !== 9);






// criarAluno("1", "", "9999-8969", "joao@email.com");
// criarAluno( "2", "Maria","85999-4548", "maria@email.com");
// listarAluno()
// editarAluno ("a92123", "Maria joao"," 849999-8888", "joao@email.com");

// //exluir o aluno 192123
// listaralunos
// excluirAlunos("a92123");
// listarAluno ();