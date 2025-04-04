const nomesCategorias = [
    ["Vinil Branco", "Vinil Transparente", "Plantas de Terreno", "Vinil com Recorte", "Lona", "Banner", "Perfurado", "Placas Adesivadas"],
    ["Credenciais", "Convites", "Apostilas", "Calendários", "Agendas", "Livros", "Rótulos", "Fotos"],
    ["Panfletos", "Folders", "Cartão de Visita", "Pastas", "Blocos", "Receituários", "Folhetos", "Material Eleitoral"],
    ["Camisas", "Canecas", "Pulseiras", "Crachá em PVC", "Ecobag", "Wind Banner", "Caixas", "Display em Acrílico"]
];

const imagensCategorias = [
    ["Images/portfolio/VinilBranco.png", "Images/portfolio/VinilTransparente.png", "Images/portfolio/PlantasTerreno.png", "Images/portfolio/VinilcomRecorte.png", "Images/portfolio/Lona.png", "Images/portfolio/Banner.png", "Images/portfolio/Perfurado.png", "Images/portfolio/PlacasAdesivadas.png"],
    ["Images/portfolio/Credenciais.png", "Images/portfolio/Convites.png", "Images/portfolio/Apostilas.png", "Images/portfolio/Calendarios.png", "Images/portfolio/Agendas.png", "Images/portfolio/Livros.png", "Images/portfolio/Rotulos.png", "Images/portfolio/Fotos.png"],
    ["Images/portfolio/Panfleto.png", "Images/portfolio/Folder.png", "Images/portfolio/CartaoDeVisita.png", "Images/portfolio/Pastas.png", "Images/portfolio/Blocos.png", "Images/portfolio/Receituario.png", "Images/portfolio/Folheto.png", "Images/portfolio/MaterialCampanha.png"],
    ["Images/portfolio/Camisas.png", "Images/portfolio/Canecas.png", "Images/portfolio/Pulseiras.png", "Images/portfolio/Cracha.png", "Images/portfolio/Ecobag.png", "Images/portfolio/WindBanner.png", "Images/portfolio/Caixa.png", "Images/portfolio/Display.png"]
];

const descricoesCategorias = [
    [
        "Adesivo para superfícies planas, ideal para paredes e ambientes internos",
        "Adesivo transparente resistente, perfeito para vitrines e áreas externas",
        "Plantas técnicas detalhadas para projetos e obras",
        "Recorte eletrônico personalizado com alta precisão e acabamento perfeito",
        "Ideal para fachadas e comunicação visual externa, resistente ao tempo",
        "Comunicação promocional personalizada para campanhas publicitárias",
        "Adesivos ideais para vidro de carro, vitrines e janelas de lojas",
        "Placas em PS com adesivo aplicado, ideais para sinalização interna e externa"
    ],
    [
        "Identificação personalizada para eventos, congressos e feiras",
        "Convites especiais para casamentos, festas e celebrações únicas",
        "Material didático impresso com qualidade e acabamento profissional",
        "Calendários personalizados com sua marca para brindes e presentes",
        "Agendas corporativas com personalização exclusiva para sua empresa",
        "Livros impressos sob demanda com acabamento profissional e alta qualidade",
        "Rótulos personalizados para produtos com qualidade profissional",
        "Fotos impressas com resolução fotográfica e qualidade excepcional"
    ],
    [
        "Material promocional impresso para divulgação eficaz da sua marca",
        "Dobraduras e informativos impressos com design profissional e atraente",
        "Cartões de visita profissionais que reforçam a identidade visual da sua marca",
        "Pastas personalizadas ideais para apresentações corporativas e reuniões",
        "Blocos de anotações personalizados, ótimos para brindes e uso diário",
        "Receituários médicos personalizados com impressão clara e precisa",
        "Folhetos promocionais em geral com alta qualidade gráfica",
        "Kit completo de campanha, com materiais gráficos integrados para melhor desempenho"
    ],
    [
        "Estampas personalizadas em camisetas e tecidos diversos para eventos e promoções",
        "Canecas personalizadas com logo ou arte, ideais para presentes e brindes",
        "Pulseiras personalizadas para controle e identificação em eventos",
        "Crachás de PVC com clip resistentes e duráveis, ideais para identificação profissional",
        "Ecobags ecológicas personalizadas, sustentáveis e práticas para uso diário",
        "Bandeiras promocionais resistentes ao vento, ideais para eventos ao ar livre",
        "Caixas personalizadas sob medida para presentes e produtos exclusivos",
        "Display transparente em acrílico, perfeito para exposição de produtos e comunicação visual"
    ]
];

const grids = document.querySelectorAll(".square-grid");

grids.forEach((grid, categoriaIndex) => {
    const nomes = nomesCategorias[categoriaIndex];
    const imagens = imagensCategorias[categoriaIndex];
    const descricoes = descricoesCategorias[categoriaIndex];
    const numeroWhatsapp = "5521982154339";

    for (let i = 0; i < nomes.length; i++) {
        const itemWrapper = document.createElement("div");
        itemWrapper.className = "itemSquare";

        const square = document.createElement("div");
        square.className = "square";

        const img = document.createElement("img");
        img.src = imagens[i];
        img.alt = nomes[i];

        square.appendChild(img);

        const textDiv = document.createElement("div");
        textDiv.className = "textSquares";

        const h3 = document.createElement("h3");
        h3.textContent = nomes[i];

        const p = document.createElement("p");
        p.textContent = descricoes[i];

        const button = document.createElement("a");
        button.textContent = "Saiba mais";
        button.className = "whatsapp-button";
        const mensagem = `Olá! Gostaria de saber mais sobre o material: ${nomes[i]}`;
        const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
        button.href = link;
        button.target = "_blank";

        textDiv.appendChild(h3);
        textDiv.appendChild(p);
        textDiv.appendChild(button);

        itemWrapper.appendChild(square);
        itemWrapper.appendChild(textDiv);

        grid.appendChild(itemWrapper);
    }
});