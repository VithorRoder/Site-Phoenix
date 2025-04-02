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

const descricoesCategorias = [
    ["Adesivo para superfícies planas", "Adesivo transparente resistente", "Plantas para obras", "Recorte eletrônico personalizado", "Ideal para fachadas", "Comunicação promocional", "Para vidro de carro ou loja", "Placas em PS com adesivo aplicado"],
    ["Identificação para eventos", "Convites para casamentos e festas", "Material didático impresso", "Calendários personalizados", "Agendas corporativas", "Livros sob demanda", "Rótulos para produtos", "Fotos com qualidade fotográfica"],
    ["Material promocional", "Dobraduras e informativos", "Cartões de visita profissionais", "Pastas para apresentações", "Blocos para anotações", "Receituários médicos", "Folhetos em geral", "Kit completo de campanha"],
    ["Estampas personalizadas", "Canecas com logo", "Pulseiras para eventos", "Crachás de PVC com clip", "Ecobags ecológicas", "Bandeiras para vento", "Caixas personalizadas", "Display transparente em acrílico"]
];

const grids = document.querySelectorAll(".square-grid");

grids.forEach((grid, categoriaIndex) => {
    const nomes = nomesCategorias[categoriaIndex];
    const imagens = imagensCategorias[categoriaIndex];
    const descricoes = descricoesCategorias[categoriaIndex];

    for (let i = 0; i < nomes.length; i++) {
        const itemWrapper = document.createElement("div");
        itemWrapper.className = "itemSquare";

        const square = document.createElement("div");
        square.className = "square";

        //const span = document.createElement("span");
        //span.textContent = nomes[i];

        const img = document.createElement("img");
        img.src = imagens[i];
        img.alt = nomes[i];

        //square.appendChild(span);
        square.appendChild(img);

        const textDiv = document.createElement("div");
        textDiv.className = "textSquares";

        const h3 = document.createElement("h3");
        h3.textContent = nomes[i];

        const p = document.createElement("p");
        p.textContent = descricoes[i];

        // 🟢 Botão
        const button = document.createElement("button");
        button.textContent = "Saiba mais";

        // Montagem
        textDiv.appendChild(h3);
        textDiv.appendChild(p);
        textDiv.appendChild(button);

        itemWrapper.appendChild(square);
        itemWrapper.appendChild(textDiv);

        grid.appendChild(itemWrapper);
    }
});