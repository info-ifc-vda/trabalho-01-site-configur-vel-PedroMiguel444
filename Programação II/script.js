function abrirMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}

function abrirPainel() {
    document.getElementById("painel").classList.toggle("ativo");
}

function trocarTema() {
    document.body.classList.toggle("light");
}

let tamanho = 16;

function aumentarFonte() {

    if (tamanho < 24) {
        tamanho += 2;
        document.body.style.fontSize = tamanho + "px";
    }

}

function diminuirFonte() {

    if (tamanho > 12) {
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px";
    }

}

function trocarImagem(src) {
    document.getElementById("imagemPrincipal").src = src;
}

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {

    header.addEventListener("click", () => {

        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });

});

const imagens = [
    "imgs/interestelar.jpg",
    "imgs/vingadores.jpg",
    "imgs/vingadores2.jpg",
];

let index = 0;

function mostrarImagem() {
    document.getElementById("slide").src = imagens[index];
}

function proximo() {

    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    mostrarImagem();
}

function anterior() {

    index--;

    if (index < 0) {
        index = imagens.length - 1;
    }

    mostrarImagem();
}