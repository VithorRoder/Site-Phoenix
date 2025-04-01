function enviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const categoriaSelect = document.getElementById('categoria');
    const categoria = categoriaSelect.options[categoriaSelect.selectedIndex].text.trim();
    const opcao = document.getElementById('opcao').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !categoria || !opcao || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    const numeroWhatsApp = '5521982154339';

    const texto = `Nome: ${nome}%0ASegmento: ${categoria}%0AMaterial: ${opcao}%0A%0A${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    window.open(url, '_blank');
}