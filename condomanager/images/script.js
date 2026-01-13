document.addEventListener('DOMContentLoaded', () => {
    console.log("Sito Estia inizializzato con successo.");

    const header = document.querySelector('.ct-header');
    if(header) {
        console.log("Layout pronto e sito completo caricato.");
    }

    // Gestione header trasparente con scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.ct-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});