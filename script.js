//o var hamburguer e uma variavel que vai tomar o identificador ou classe html do hamburguer

document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu"));