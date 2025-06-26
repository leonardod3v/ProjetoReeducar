const imagens = document.querySelector('.imagens');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
const totalImagens = document.querySelectorAll('.imagens img').length;

let indice = 0;

function atualizarCarrossel() {
  const larguraImagem = document.querySelector('.carrossel').clientWidth;
  imagens.style.transform = `translateX(${-indice * larguraImagem}px)`;
}

btnProximo.addEventListener('click', () => {
  if (indice < totalImagens - 1) {
    indice++;
    atualizarCarrossel();
  }
});

btnAnterior.addEventListener('click', () => {
  if (indice > 0) {
    indice--;
    atualizarCarrossel();
  }
});

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener('resize', atualizarCarrossel);

// Inicializa corretamente
window.addEventListener('load', atualizarCarrossel);
