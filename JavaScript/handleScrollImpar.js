function handleScroll() {
    const panels = document.querySelectorAll('.panelImpar');
    const triggerBottom = window.innerHeight * 0.8;
    
    panels.forEach(panel => {
        const panelTop = panel.getBoundingClientRect().top;
        if (panelTop < triggerBottom) {
            panel.classList.add('visible');
        } else {
            panel.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();