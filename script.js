// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera as frases
const changeMsgBtn = document.getElementById("btn-mudar-frase");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique que altera o txt das frases
changeMsgBtn.addEventListener("click", function() {
    const mensagens = document.getElementsByClassName("mensagem2");

    for( let i=0; i<3; i++){
        mensagens[i].textContent = `Essa é a frase ${i+1} modificada`;
    }
})

