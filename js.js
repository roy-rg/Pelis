// ============================================
// CONFIGURACIÓN SIMPLE
// ============================================
const CONFIG = {
    initialMovies: 4,      // Mostrar 20 películas inicialmente
    loadMoreCount: 20       // Cargar 20 más cada vez
};

// ============================================
// DATOS DE PELÍCULAS (CORREGIDOS)
// ============================================
const movies = [
    // CORREGÍ LOS IDs DUPLICADOS
    { id: 1, image: "Prueba.jpg", titulo: "Avatar 1", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 1" },
    { id: 2, image: "Prueba2.jpg", titulo: "Avatar 2", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 2" },
    { id: 3, image: "Prueba3.jpg", titulo: "Avatar 3", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 3" },
    { id: 4, image: "Prueba4.jpg", titulo: "Avatar 4", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 4" },
    { id: 5, image: "Prueba5.jpg", titulo: "Avatar 5", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 5" },
    { id: 6, image: "Prueba6.jpg", titulo: "Avatar 6", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 6" },
    { id: 7, image: "Prueba7.jpg", titulo: "Avatar 7", espanol: "Avatar", ano: 2009, generos: ["Ciencia Ficción", "Aventura", "Acción"], sinopsis: "Sinopsis 7" }
   
    
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let selectedGenres = new Set();
let visibleMovies = CONFIG.initialMovies;
let filteredMovies = [];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function initApp() {
    console.log(`🎬 Catálogo cargado: ${movies.length} películas`);
    createGenreButtons();
    setupEvents();
    filterMovies();
}

function createGenreButtons() {
    const container = document.getElementById('genresContainer');
    const uniqueGenres = new Set();
    
    movies.forEach(movie => {
        if (movie.generos) {
            movie.generos.forEach(genre => uniqueGenres.add(genre.trim()));
        }
    });
    
    const sortedGenres = Array.from(uniqueGenres).sort();
    
    // Botón "Todas"
    const allButton = document.createElement('div');
    allButton.className = 'genre-btn active';
    allButton.textContent = 'Todas';
    allButton.dataset.genre = 'all';
    allButton.addEventListener('click', handleGenreClick);
    container.appendChild(allButton);
    
    // Botones para cada género
    sortedGenres.forEach(genre => {
        const button = document.createElement('div');
        button.className = 'genre-btn';
        button.textContent = genre;
        button.dataset.genre = genre;
        button.addEventListener('click', handleGenreClick);
        container.appendChild(button);
    });
}

function handleGenreClick() {
    const genre = this.dataset.genre;
    const allBtn = document.querySelector('[data-genre="all"]');
    
    if (genre === 'all') {
        document.querySelectorAll('.genre-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        selectedGenres.clear();
    } else {
        if (allBtn && allBtn.classList.contains('active')) {
            allBtn.classList.remove('active');
        }
        
        this.classList.toggle('active');
        
        if (selectedGenres.has(genre)) {
            selectedGenres.delete(genre);
        } else {
            selectedGenres.add(genre);
        }
        
        if (selectedGenres.size === 0) {
            allBtn.classList.add('active');
        }
    }
    
    // Resetear a 20 películas visibles al cambiar filtro
    visibleMovies = CONFIG.initialMovies;
    filterMovies();
}

function filterMovies() {
    const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Filtrar películas
    filteredMovies = movies.filter(movie => {
        const textMatch = searchText === '' || 
            movie.titulo.toLowerCase().includes(searchText) ||
            (movie.espanol && movie.espanol.toLowerCase().includes(searchText));
        
        if (selectedGenres.size > 0) {
            if (!movie.generos) return false;
            const genreMatch = Array.from(selectedGenres).every(g => 
                movie.generos.includes(g)
            );
            return textMatch && genreMatch;
        }
        
        return textMatch;
    });
    
    console.log(`🔍 Filtro: "${searchText}" | Géneros: ${selectedGenres.size} | Resultados: ${filteredMovies.length}`);
    
    // Mostrar películas
    displayMovies();
}

function displayMovies() {
    const container = document.getElementById('moviesContainer');
    
    if (filteredMovies.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron películas</h3>
                <p>Prueba con otra búsqueda o selección de género</p>
            </div>
        `;
        return;
    }
    
    // Calcular cuántas películas mostrar
    const moviesToShow = filteredMovies.slice(0, visibleMovies);
    
    // Generar HTML de las películas
    let html = '';
    
    moviesToShow.forEach(movie => {
        html += `
        <div class="movie-card" data-movie-id="${movie.id}">
            <div class="movie-image-container">
                <img src="images/${movie.image}" class="movie-image" alt="${movie.titulo}">
                <div class="movie-year-badge">${movie.ano || 'N/A'}</div>
            </div>
            
            <div class="movie-content">
                <h3 class="movie-title">${movie.titulo}</h3>
                <p class="movie-spanish">${movie.espanol || ''}</p>
                
                <div class="movie-genres">
                    ${movie.generos ? movie.generos.slice(0, 3).map(g => 
                        `<span class="genre-tag">${g}</span>`
                    ).join('') : ''}
                    ${movie.generos && movie.generos.length > 3 ? 
                        '<span class="genre-tag">...</span>' : ''}
                </div>
                
                <button class="synopsis-btn" onclick="openSynopsisModal(${movie.id})">
                    Ver sinopsis
                </button>
            </div>
        </div>
        `;
    });
    
    // Contador de películas
    html += `
    <div class="movies-count">
        Mostrando ${moviesToShow.length} de ${filteredMovies.length} películas
    </div>
    `;
    
    // Botón "Mostrar más" si hay más películas
    if (visibleMovies < filteredMovies.length) {
        const remaining = filteredMovies.length - moviesToShow.length;
        html += `
        <div class="show-more-container">
            <button class="show-more-btn" id="showMoreBtn">
                Mostrar más (${remaining} restantes)
            </button>
        </div>
        `;
    }
    
    container.innerHTML = html;
    
    // Agregar evento al botón "Mostrar más" si existe
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', showMoreMovies);
    }
}

function showMoreMovies() {
    // Aumentar el número de películas visibles
    visibleMovies += CONFIG.loadMoreCount;
    
    // Volver a mostrar las películas
    displayMovies();
    
    // Hacer scroll suave hacia el final
    setTimeout(() => {
        const showMoreContainer = document.querySelector('.show-more-container');
        if (showMoreContainer) {
            showMoreContainer.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 100);
}

function openSynopsisModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    const modal = document.getElementById('synopsisModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div class="modal-image-container">
            <img src="images/${movie.image}" class="modal-image" alt="${movie.titulo}">
        </div>
        
        <div class="modal-original-title">${movie.titulo}</div>
        <div class="modal-spanish-title">${movie.espanol || ''}</div>
        
        <div class="modal-year">${movie.ano || 'N/A'}</div>
        
        <div class="modal-genres">
            ${movie.generos ? movie.generos.map(g => 
                `<span class="modal-genre-tag">${g}</span>`
            ).join('') : ''}
        </div>
        
        <div class="modal-section-title">Sinopsis</div>
        <div class="modal-synopsis">
            ${movie.sinopsis || 'Sin sinopsis disponible.'}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSynopsisModal() {
    document.getElementById('synopsisModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupEvents() {
    let searchTimeout;
    
    // Evento de búsqueda
    document.getElementById('searchInput').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            visibleMovies = CONFIG.initialMovies;
            filterMovies();
        }, 400);
    });
    
    // Evento para cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSynopsisModal();
        }
    });
    
    // Event listener para el botón de cerrar modal
    document.getElementById('closeModalBtn').addEventListener('click', closeSynopsisModal);
    
    // Event listener para cerrar modal al hacer clic fuera
    document.getElementById('synopsisModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('synopsisModal')) {
            closeSynopsisModal();
        }
    });
}

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', initApp);