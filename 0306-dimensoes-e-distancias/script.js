// Verifique a distância da primeira imagem
// em relação ao topo da página
const animaisLista = document.querySelector("img");
const distanciaTop = animaisLista.offsetTop;

console.log(distanciaTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
      soma += imagem.offsetWidth;
    });
    console.log(soma);
  }
  
  window.onload = function() {
    somaImagens();
  }
  
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia("(max-width: 720px)").matches;
const menu = document.querySelector(".menu");

if (small) {
  menu.classList.remove("menu");
  menu.classList.add("menu-mobile");
}