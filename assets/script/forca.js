let tent = 6;
let listaDinamica = [];
let categoriaPalavraSecreta;
let palavraSecretaRandomizada;

const elementos = [
    elemento001 = {
        nome: "AMORA",
        categoria: "Frutas",
        xp: 5
    },
    elemento002 = {
        nome: "BANANA",
        categoria: "FRUTAS",
        xp: 6
    },
    elemento003 = {
        nome: "CARAMBOLA",
        categoria: "FRUTAS",
        xp: 9
    },
    elemento004 = {
        nome: "DAMASCO",
        categoria: "FRUTAS",
        xp: 7
    },
    elemento005 = {
        nome: "FIGO",
        categoria: "FRUTAS",
        xp: 4
    },
    elemento006 = {
        nome: "JACA",
        categoria: "FRUTAS",
        xp: 4
    },
    elemento007 = {
        nome: "KIWI",
        categoria: "FRUTAS",
        xp: 4
    },
    elemento008 = {
        nome: "LARANJA",
        categoria: "FRUTAS",
        xp: 7
    },
    elemento009 = {
        nome: "MAMAO",
        categoria: "FRUTAS",
        xp: 5
    }, 
    elemento010 = {
        nome: "PERA",
        categoria: "FRUTAS",
        xp: 4
    },
    elemento011 = {
        nome: "GATO",
        categoria: "ANIMAL",
        xp: 4
    },
    elemento012 = {
        nome: "CAPIVARA",
        categoria: "ANIMAL",
        xp: 8
    },
    elemento013 = {
        nome: "VACA",
        categoria: "ANIMAL",
        xp: 4
    },
    elemento014 = {
        nome: "CAVALO",
        categoria: "ANIMAL",
        xp: 6
    },
    elemento015 = {
        nome: "MACACO",
        categoria: "ANIMAL",
        xp: 6
    },

    elemento016 = {
        nome: "BORBOLETA",
        categoria: "ANIMAL",
        xp: 9
    },
    
    elemento017 = {
        nome: "MINHOCA",
        categoria: "ANIMAL",
        xp: 7
    },
    
    elemento018 = {
        nome: "CACHORRO",
        categoria: "ANIMAL",
        xp: 8
    },
    elemento019 = {
        nome: "BOI",
        categoria: "ANIMAL",
        xp: 3
    },
    elemento020 = {
        nome: "PORCO",
        catergoria: "ANIMAL",
        xp: 5
    },
    elemento021 = {
        nome: "BEATLES",
        categoria: "MUSICA",
        xp: 5
    },
    elemento022 = {
        nome: "METALLICA",
        categoria: "MUSICA",
        xp: 5
    },
    elemento023 = {
        nome: "CREAM",
        categoria: "MUSICA",
        xp: 5
    },
    elemento024 = {
        nome: "MISFITS",
        categoria: "MUSICA",
        xp: 5
    },
    elemento025 = {
        nome: "PAINKILLER",
        categoria: "MUSICA",
        xp: 5
    },
    elemento026 = {
        nome: "SLAYER",
        categoria: "MUSICA",
        xp: 5
    },
    elemento027 = {
        nome: "ANTHRAX",
        categoria: "MUSICA",
        xp: 5
    },
    elemento028 = {
        nome: "PANTERA",
        categoria: "MUSICA",
        xp: 5
    },
    elemento029 = {
        nome: "RAMONES",
        categoria: "MUSICA",
        xp: 5
    },
    elemento030 = {
        nome: "MUTANTES",
        categoria: "MUSICA",
        xp: 5
    }
]

function randomizarPalavraSecreta() {
    let indice = parseInt(Math.random() * elementos.length);

    categoriaPalavraSecreta = elementos[indice].categoria;
    palavraSecretaRandomizada = elementos[indice].nome;
}
randomizarPalavraSecreta();

function mostrarNoBrowser() {
    let categoria = document.querySelector(".categoria");
    categoria.innerHTML = categoriaPalavraSecreta;

    let palavra = document.querySelector(".palavra-secreta");
    palavra.innerHTML = "";

    for(i = 0; i < palavraSecretaRandomizada.length; i++) {
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;" 
            palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div>`
        } else {
            palavra.innerHTML = palavra.innerHTML + `<div class="letras">${listaDinamica[i]}</div>`
        }
    }
}
mostrarNoBrowser();

function verificarLetra(letra) {
    if (tent > 0) {
        mudarEstilo("letra-" + letra);
        comparaListas(letra);
        mostrarNoBrowser()
    }
}

function mudarEstilo(teclas) {
    document.getElementById(teclas).style.background = "#FF8C00";
    document.getElementById(teclas).style.color = "white";
}

function comparaListas(letra) {
    const posicao = palavraSecretaRandomizada.indexOf(letra);
    if(posicao < 0) {
        tent--;
        // caregar imagem
    
        // verificar se há tentativas
    } else {
        for(i = 0; i < palavraSecretaRandomizada.length; i++) {
            if(palavraSecretaRandomizada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaRandomizada.length; i++) {
        if (palavraSecretaRandomizada[i] != listaDinamica[i]) {

        }
    }
    
    if(vitoria == true) {
        // mensagem que ganhou
        tent = 0;
    }
}