if (window.innerWidth >= 900) {
    const textElement = document.getElementById("changing-text");
    const messages = [
        "Bem Vindo a Gráfica Phoenix", 
        "Há mais de 30 anos fazendo boas impressões"
    ];
    let index = 0;

    setInterval(() => {
        textElement.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % messages.length;
            textElement.textContent = messages[index];
            textElement.style.opacity = 1;
            textElement.style.fontSize = index === 1 ? "3.4vw" : "4.2vw";
        }, 500);
    }, 4000);
}