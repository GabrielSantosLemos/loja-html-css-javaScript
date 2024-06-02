function loadComponent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/header.html", "header");
  loadComponent("components/footer.html", "footer");
});
