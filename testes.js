
let palavras = []

function adicionarNome(n) {
    document.getElementById("mensagem1").innerText = ""
    let nome = document.getElementById("nome").value
    palavras.push(nome)
    document.getElementById("name").innerHTML = palavras.join(" - ")
    document.getElementById("nome").value=""
}




function palindrona() {
    
    let palindronas = []

    
        for (let i = 0; i < palavras.length; i++) {
        let nova = ""
            let palavra= palavras[i]
        for (let k = palavra.length - 1; k >= 0; k--) {
            nova += palavra[k]
        }
        if (nova == palavra) {
            palindronas.push(nova)
        }

    }
    if (palindronas.length > 0) {
        //alert("estas são as palavras palindronas " + palindronas)
        //alert("foram encontradas " + palindronas.length + " palavras palindronas")
        document.getElementById("mensagem1").innerText = "estas são as palavras palindronas " + palindronas
        document.getElementById("mensagem2").innerText = "foram encontradas " + palindronas.length + " palavras palindronas"
    }
    else {
        document.getElementById("mensagem1").innerText="não tem palavras palindronas"
    }
    
    
}
function limparTela() {
    palavras = []
    document.getElementById("name").innerHTML = ""
    document.getElementById("mensagem1").innerText = ""
    document.getElementById("mensagem2").innerText = ""
}

