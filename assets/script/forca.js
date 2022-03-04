let tent = 6; 
let listaDinamica = []; 
let categoriaPalavraSecreta; 
let palavraSecretaRandomizada; 
let elementos; 
const letrasErradas = [];
let pontuacao = 0;


function mostrarNoBrowser() { 
    let categoria = document.querySelector(".categoria"); 
    categoria.innerHTML = categoriaPalavraSecreta; 
 
    let palavra = document.querySelector(".palavra-secreta"); 
    palavra.innerHTML = ""; 
 
    for (i = 0; i < palavraSecretaRandomizada.length; i++) { 
        if (listaDinamica[i] == undefined) { 
            listaDinamica[i] = "&nbsp;" 
            palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div>`
        } else { 
            palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div> `
        } 
    } 
} 

function restart() {
    location.reload();
}
 
fetch("/assets/script/lista.json") 
    .then(response => { 
        return response.json(); 
    }) 
    .then(jsondata => { 
        elementos = jsondata; 
 
        function randomizarPalavraSecreta(elementos) { 
            let indice = parseInt(Math.random() * elementos.length); 
 
            categoriaPalavraSecreta = elementos[indice].categoria; 
            palavraSecretaRandomizada = elementos[indice].nome; 
            pontuacao = elementos[indice].xp;
            console.log(pontuacao);
        } 
        randomizarPalavraSecreta(elementos); 
        mostrarNoBrowser();

    }); 
 
    
    function comparaListas(letra) { 
        const posicao = palavraSecretaRandomizada.indexOf(letra); 
        if (posicao < 0) { 
            letrasErradas.push(letra)
            tent--; 
            carregarForca(letrasErradas);
 
            if(tent == 0) {
                frase.innerHTML = `A palavra secreta era ${palavraSecretaRandomizada}. <br> Clique em ► e jogue novamente.`
            }
        } else { 
            for (i = 0; i < palavraSecretaRandomizada.length; i++) { 
                if (palavraSecretaRandomizada[i] == letra) { 
                    listaDinamica[i] = letra; 
                } 
            } 
        } 
 
        let vitoria = true; 
        for (i = 0; i < palavraSecretaRandomizada.length; i++) { 
            if (palavraSecretaRandomizada[i] != listaDinamica[i]) { 
                vitoria = false; 
            } 
        } 
 
        if (vitoria == true) { 
            frase.innerHTML = `<b>Parabéns, você ganhou!</b> <br>Clique em ► e jogue novamente.`
            tent = 0;
            pontos.innerHTML = pontos.innerHTML + pontuacao;
        } 
    } 
 
     
    function mudarEstilo(teclas) { 
        document.getElementById(teclas).style.background = "#FF8C00"; 
        document.getElementById(teclas).style.color = "white"; 
    } 
 
 
 
    function verificarLetra(letra) { 
        document.getElementById("letra-" + letra).disabled = true;
        if (tent > 0) { 
            mudarEstilo("letra-" + letra); 
            comparaListas(letra); 
            mostrarNoBrowser()
        } 
    }

    function carregarForca(letrasErradas) {
        const partes__corpo = document.querySelectorAll(".partes-corpo")
        for(let i = 0; i < letrasErradas.length; i++) {
            partes__corpo[i].style.display = "block"
    }
}