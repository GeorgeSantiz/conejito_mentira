// Función para avanzar a la siguiente página del cuento
function nextPage(pageNumber) {
    // Ocultamos todas las páginas
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Mostramos la página actual
    let currentPage = document.getElementById('page' + pageNumber);
    currentPage.classList.remove('hidden');
}

// Función para terminar el cuento
function endStory() {
    // Ocultamos todas las páginas
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Mostramos la página final
    let endPage = document.getElementById('end');
    endPage.classList.remove('hidden');
}

// Función para reiniciar el cuento
function startOver() {
    // Ocultamos todas las páginas
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Mostramos la primera página
    let firstPage = document.getElementById('page1');
    firstPage.classList.remove('hidden');
}
