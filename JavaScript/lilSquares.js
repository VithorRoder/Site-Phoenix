    // Listas de nomes diferentes para cada categoria
    const nomesCategorias = [
        ["João", "Estela", "Carlos", "Mariana", "Lucas", "Fernanda", "Pedro", "Sofia", "Rafael"], // Comunicação Visual
        ["Ana", "Bruno", "Clara", "Daniel", "Eduarda", "Felipe", "Gabriel", "Helena", "Igor"],   // Gráfica Rápida
        ["Juliana", "Kevin", "Larissa", "Miguel", "Natália", "Otávio", "Priscila", "Rodrigo", "Samuel"] // Offset
    ];

    // Seleciona todas as áreas onde os quadrados serão adicionados
    const grids = document.querySelectorAll(".square-grid");

    grids.forEach((grid, index) => {
        const nomes = nomesCategorias[index]; // Pega a lista específica da coluna
        for (let i = 0; i < nomes.length; i++) {
            let square = document.createElement("div");
            square.className = "square";
            square.textContent = nomes[i]; 
            grid.appendChild(square);
        }
    });