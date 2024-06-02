// Função para exibir itens do carrinho na página
function exibirCarrinho() {
  const tbody = document.getElementById("carrinho-tbody");
  const carrinho = JSON.parse(getCookie("carrinho") || "[]");
  let precoTotal = 0;

  if (carrinho.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">Seu carrinho está vazio.</td></tr>';
    document.getElementById("preco-total").textContent = precoTotal.toFixed(2);
    return;
  }

  tbody.innerHTML = ""; // Limpar o conteúdo anterior

  carrinho.forEach((produto, index) => {
    const row = document.createElement("tr");

    // Coluna da Foto
    const fotoCell = document.createElement("td");
    const fotoImg = document.createElement("img");
    fotoImg.src = produto.foto;
    fotoImg.alt = produto.nome;
    fotoImg.style.maxWidth = "100px"; // Definir o tamanho máximo da imagem
    fotoCell.appendChild(fotoImg);

    // Coluna do Nome
    const nomeCell = document.createElement("td");
    nomeCell.textContent = produto.nome;

    // Coluna do Preço
    const precoCell = document.createElement("td");
    precoCell.textContent = `R$ ${produto.preco.toFixed(2)}`;
    precoTotal += produto.preco; // Adicionar ao preço total

    // Coluna do Botão de Remover
    const removerCell = document.createElement("td");
    const removerButton = document.createElement("button");
    removerButton.className = "btn btn-danger";
    removerButton.textContent = "Remover";
    removerButton.onclick = () => removerDoCarrinho(index);
    removerCell.appendChild(removerButton);

    // Adicionar as células à linha
    row.appendChild(fotoCell);
    row.appendChild(nomeCell);
    row.appendChild(precoCell);
    row.appendChild(removerCell);

    // Adicionar a linha ao corpo da tabela
    tbody.appendChild(row);
  });

  // Atualizar o preço total no resumo
  document.getElementById("preco-total").textContent = precoTotal.toFixed(2);
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  let carrinho = JSON.parse(getCookie("carrinho") || "[]");
  carrinho.splice(index, 1);
  setCookie("carrinho", JSON.stringify(carrinho), 7);
  exibirCarrinho(); // Atualizar a exibição do carrinho após a remoção
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

// Chamar a função para exibir o carrinho quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", exibirCarrinho);
