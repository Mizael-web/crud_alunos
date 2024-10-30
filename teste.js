

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
        console.log ("criando aluno...");
        break;
       case 2: 
       console.log (" editar aluno...");
       break;
       case 3 :
       console.log (" excluindo o aluno...");
       break;
       case 4:
       console.log (" listar o aluno...");
       break;
       case 5:
        console.log (" saindo do Sistema...");
        break;
    default :
    console.log (" valor invalido");

    }
} 


while (opcao !== 9);