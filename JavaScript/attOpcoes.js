const opcoesPorCategoria = {
    comunicacao: ["Banner", "Adesivo", "Placa", "Letreiro"],
    grafica: ["Cartão de Visita", "Panfleto", "Folder"],
    offset: ["Revista", "Livro", "Catálogo"],
    diversos: ["Brindes", "Personalizados", "Outro"]
};

function atualizarOpcoes() {
    const categoria = document.getElementById("categoria").value;
    const selectOpcao = document.getElementById("opcao");

    selectOpcao.innerHTML = "";

    opcoesPorCategoria[categoria].forEach(opcao => {
        const optionElement = document.createElement("option");
        optionElement.textContent = opcao;
        optionElement.value = opcao;
        selectOpcao.appendChild(optionElement);
    });
}
atualizarOpcoes();