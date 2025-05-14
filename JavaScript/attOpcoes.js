const opcoesPorCategoria = {
    comunicacao: ["Adesivos", "Lonas", "Placa de PS", "Outros"],
    grafica: ["Cartão de Visita", "Panfleto", "Folder", "Apostilas", "Outros"],
    offset: ["Revista", "Cartão de Visita", "Catálogo", "Outros"],
    diversos: ["Camisas", "Canecas", "Crachás","Outros"]
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