// Lista de produtos
const produtos = [
  {
    foto: "images/camiseta-basic-latte/1.webp",
    nome: "Camiseta Basic - Latté",
    preco: 84.9,
    descricao: `
      Detalhe em Silk na parte da frente.
      Confeccionada com linha 100% poliéster (maior durabilidade na costura).
      Com reforço de ombro a ombro com viés (a cor do viés pode alterar de acordo com as reposições do produto).
      Composição: Malha 100% Algodão, fio 30.1 penteada.
      Cor predominante: Caffé Latté.
    `,
  },
  {
    foto: "images/camiseta-sirenes/1.webp",
    nome: "Camiseta - Sirenes",
    preco: 84.9,
    descricao: `
      Detalhe em Silk na parte de trás.
      Estampa frontal.
      Confeccionada com linha 100% poliéster (maior durabilidade na costura).
      Com reforço de ombro a ombro com viés (a cor do viés pode alterar de acordo com as reposições do produto).
      Composição: Malha 100% Algodão, fio 30.1 penteada.
      Cor predominante: Preto.
    `,
  },
  {
    foto: "images/camiseta-melt/1.webp",
    nome: "Camiseta - Melt",
    preco: 19.99,
    descricao: `
      Detalhe em Silk na parte da frente.
      Estampa em silk nas costas.
      Confeccionada com linha 100% poliéster (maior durabilidade na costura).
      Com reforço de ombro a ombro com viés (a cor do viés pode alterar de acordo com as reposições do produto).
      Composição: Malha 100% Algodão, fio 30.1 penteada.
      Cor predominante: Branco.
    `,
  },
  {
    foto: "images/sueter-oversized-beetlejuice/1.webp",
    nome: "Suéter Oversized - Beetlejuice",
    preco: 229.99,
    descricao: `
      Suéter confeccionado em tecido de malha. Possui gola redonda, manga longa, acabamento em ribana e costura no tom.
      Detalhe em bordado no centro da peça. 
      *Ribana é um tecido canelado, muito utilizado para acabameto em mangas, punhos e barras de roupas. 
      Tamanhos: P ao GG;
      Cor: Listrado Preto e Branco.
      Material: Malha Retilínea;
      Composição: 50% Acrílico e 50% Algodão. 
    `,
  },
  {
    foto: "images/regata-nokken/1.webp",
    nome: "Regata - Nokken",
    preco: 69.99,
    descricao: `
      Estampa  em Silk-Screen.
      Confeccionada com linha 100% Poliéster (maior durabilidade na costura).
      Composição: Malha 100% Algodão, fio 30.1 penteada. 
      Cor: Preto.
    `,
  },

  {
    foto: "images/still-regata-drops/1.webp",
    nome: "Regata - Drops",
    preco: 69.99,
    descricao: `
      Estampa  em Silk-Screen.
      Confeccionada com linha 100% Poliéster (maior durabilidade na costura).
      Composição: Malha 100% Algodão, fio 30.1 penteada. 
      Cor: Preto.
    `,
  },
];

// Função para exibir produtos na página
function exibirProdutos() {
  const container = document.getElementById("produtos-container");
  produtos.forEach((produto) => {
    // Criação dos elementos HTML para cada produto
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    const img = document.createElement("img");
    img.src = produto.foto;
    img.className = "card-img-top";
    img.alt = produto.nome;

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = produto.nome;

    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    // cardText.textContent = produto.descricao;

    const cardPrice = document.createElement("p");
    cardPrice.className = "card-text";
    cardPrice.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    const addButton = document.createElement("button");
    addButton.className = "btn btn-primary w-100";
    addButton.textContent = "Adicionar ao Carrinho";
    addButton.onclick = () => adicionarAoCarrinho(produto);

    // Adicionando os elementos ao contêiner do card
    cardBodyDiv.appendChild(cardTitle);
    // cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardPrice);
    cardBodyDiv.appendChild(addButton);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);

    // Adicionando o card à linha
    container.appendChild(colDiv);
  });
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(getCookie("carrinho") || "[]");
  carrinho.push(produto);
  setCookie("carrinho", JSON.stringify(carrinho), 7);
  alert(`${produto.nome} foi adicionado ao carrinho!`);
}

// Funções para manipulação de cookies
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Funções para manipulação de cookies
function getCookie(name) {
  const cname = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cname) === 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }

  return "";
}

// Chamar a função para exibir os produtos quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", exibirProdutos);
