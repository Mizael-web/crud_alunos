

const prompt = require (" prompt-sync")();

// let nome o "."
// let email = " teste@email.com"
// console.log (validator.isEmai)

function exibirMenu (){
    console.log ("============================")
    console.log ("1- criar Aluno")
    console.log ("2- editar Aluno")
    console.log ("3- Excluir Aluno")
    console.log ("4- listar Aluno")
    console.log ("5- sair")
    console.log ("============================")


let opcao;
do {

exibirMenu();
opcao = parseInt (prompt ("digite uma opçãp: "));
    switch ( opcao){
       case 1:
        console.log ("criando aluno...")
        break;
       case 2: 
       console.log (" editar aluno...")
       break;
       case 3 :
       console.log (" excluindo o aluno...")
       break;
       case 4:
       console.log (" listar o aluno...")
       break;
       case 5:
        console.log (" saindo do Sistema...")
        break;
    default :
    console.log (" valor invalido")

    }
} while (opcao !==5);




    // criarAluno("1", "", "9999-8969", "joao@email.com");
    // criarAluno( "2", "Maria","85999-4548", "maria@email.com");
    // listarAluno()
    // editarAluno ("a92123", "Maria joao"," 849999-8888", "joao@email.com");

    // //exluir o aluno 192123
    // depois listaralunos
    // excluirAlunos("a92123");
    // listarAluno ()


    
