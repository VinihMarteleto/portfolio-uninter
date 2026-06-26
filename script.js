document.addEventListener("DOMContentLoaded", () => {

    // Mensagem no console (mostra que JS está ativo)
    console.log("Portfólio carregado com sucesso");

    // Scroll suave ao clicar nos links do menu
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});