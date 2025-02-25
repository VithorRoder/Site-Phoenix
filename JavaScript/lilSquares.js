const nomesCategorias = [
    ["Vinil Branco", "Vinil Transparente", "Plantas de Terreno", "Vinil com Recorte", "Lona", "Banner", "Perfurado", "Placas Adesivadas"], 
    ["Credenciais", "Convites", "Apostilas", "Calendários", "Agendas", "Livros", "Rótulos", "Fotos"],   
    ["Panfletos", "Folders", "Cartão de Visita", "Pastas", "Blocos", "Receituários", "Folhetos", "Material de Campanha"],
    ["Camisas", "Canecas", "Pulseiras", "Crachá em PVC", "Ecobag", "Wind Banner", "Caixas", "Display em Acrílico"]
];

const imagensCategorias = [
    ["Images/portfolio/VinilBranco.png", "Images/portfolio/VinilTransparente.png", "Images/portfolio/PlantasTerreno.png", "Images/portfolio/VinilcomRecorte.png", "Images/portfolio/Lona.png", "Images/portfolio/Banner.png", "Images/portfolio/Perfurado.png", "Images/portfolio/PlacasAdesivadas.png"],
    ["Images/portfolio/Credenciais.png", "Images/portfolio/Convites.png", "Images/portfolio/Apostilas.png", "Images/portfolio/Calendarios.png", "Images/portfolio/Agendas.png", "Images/portfolio/Livros.png", "Images/portfolio/Rotulos.png", "Images/portfolio/Fotos.png"],
    ["Images/portfolio/Panfleto.png", "Images/portfolio/Folder.png", "Images/portfolio/CartaoDeVisita.png", "Images/portfolio/Pastas.png", "Images/portfolio/Blocos.png", "Images/portfolio/Receituario.png", "Images/portfolio/Folheto.png", "Images/portfolio/MaterialCampanha.png"],
    ["Images/portfolio/Camisas.png", "Images/portfolio/Canecas.png", "Images/portfolio/Pulseiras.png", "Images/portfolio/Cracha.png", "Images/portfolio/Ecobag.png", "Images/portfolio/WindBanner.png", "Images/portfolio/Caixa.png", "Images/portfolio/Display.png"]
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