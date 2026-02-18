let nome
let novaPalavra
let qtd = 0
let nomes=[]




function adicionarNome() {
    nome = document.getElementById("nome").value
    document.getElementById("name").innerHTML=nome
}


let n
function palindrona() {
    let nova=""
        for (let k = nome.length-1; k>= 0; k --) {
            nova+=nome[k]   
        }
    document.getElementById("mensagem").innerHTML = nova
    if (nova == nome) {
        document.getElementById("mensagem").innerHTML="é palindrona"
    }
    else {
        document.getElementById("mensagem").innerHTML = "não é palindrona"
    }
    
    
}

