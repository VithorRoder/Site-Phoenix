const nomesCategorias = [
    ["Vinil Branco", "Vinil Transparente", "Plantas de Terreno", "Vinil com Recorte", "Lona", "Banner", "Perfurado", "Placas Adesivadas"], 
    ["Credenciais", "Convites", "Apostilas", "Calendários", "Agendas", "Livros", "Rótulos", "Fotos"],   
    ["Panfletos", "Folders", "Cartão de Visita", "Pastas", "Blocos", "Receituários", "Folhetos", "Material de Campanha"],
    ["Camisas", "Canecas", "Pulseiras", "Crachá em PVC", "Ecobag", "Wind Banner", "Caixas", "Display em Acrílico"]
];

const imagensCategorias = [
    ["Images/Joao.jpg", "img/estela.jpg", "img/carlos.jpg", "img/mariana.jpg", "img/lucas.jpg", "img/fernanda.jpg", "img/pedro.jpg", "img/sofia.jpg"],
    ["Images/credenciais.jpg", "img/bruno.jpg", "img/clara.jpg", "img/daniel.jpg", "img/eduarda.jpg", "img/felipe.jpg", "img/gabriel.jpg", "img/helena.jpg"],
    ["img/juliana.jpg", "img/kevin.jpg", "img/larissa.jpg", "img/miguel.jpg", "Images/bloco.jpg", "img/otavio.jpg", "img/priscila.jpg", "img/rodrigo.jpg"],
    ["img/juliana.jpg", "img/kevin.jpg", "img/larissa.jpg", "img/miguel.jpg", "img/natalia.jpg", "img/otavio.jpg", "img/priscila.jpg", "img/rodrigo.jpg"]
];

const grids = document.querySelectorAll(".square-grid");

grids.forEach((grid, index) => {
    const nomes = nomesCategorias[index];
    const imagens = imagensCategorias[index];

    for (let i = 0; i < nomes.length; i++) {
        let square = document.createElement("div");
        square.className = "square";

        let span = document.createElement("span");
        span.textContent = nomes[i];

        let img = document.createElement("img");
        img.src = imagens[i];
        img.alt = nomes[i];

        square.appendChild(span);
        square.appendChild(img);
        grid.appendChild(square);
    }
});