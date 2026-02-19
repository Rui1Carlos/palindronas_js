


function adicionarNome() {
    nome = document.getElementById("nome").value
    document.getElementById("name").innerHTML=nome
}



let n
function palindrona() {
    let nomes = []
    let palindronas = []

    
        for (let i = 0; i < 3; i++) {
        let nova = ""
        let nome = prompt("Digite uma palavra: ");
        nomes.push(nome);

        for (let k = nome.length - 1; k >= 0; k--) {
            nova += nome[k]
        }
        if (nova == nome) {
            palindronas.push(nova)
        }

    }
    if (palindronas.length > 0) {
        alert("estas são as palavras palindronas " + palindronas)
        alert("foram encontradas " + palindronas.length + " palavras palindronas")
    }
    else {
        document.getElementById("mensagem").innerText="não tem palavras palindronas"
    }
     
    
}

