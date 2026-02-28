// Info de los animes en JSON
const animes = [
  { "nombre": "Naruto", "autor": "Masashi Kishimoto", "año_estreno": 2002, "genero": ["Acción", "Aventura", "Shonen"], "reseña": "Naruto Uzumaki es un joven ninja que busca convertirse en Hokage y ganar el respeto de su aldea mientras controla el poder de un demonio sellado dentro de él.", "calificacion": 5, "estado": "Terminado", "imagen": "img/naruto.jpeg" },
  { "nombre": "Attack on Titan", "autor": "Hajime Isayama", "año_estreno": 2013, "genero": ["Acción", "Drama", "Fantasía oscura"], "reseña": "La humanidad vive dentro de murallas para protegerse de gigantes llamados titanes. Eren Jaeger decide unirse al ejército para vengar la destrucción de su hogar.", "calificacion": 5, "estado": "Terminado", "imagen": "img/attack on titan.jpeg" },
  { "nombre": "Death Note", "autor": "Tsugumi Ohba", "año_estreno": 2006, "genero": ["Suspenso", "Psicológico", "Sobrenatural"], "reseña": "Light Yagami encuentra un cuaderno que le permite matar a cualquier persona cuyo nombre escriba en él, iniciando una batalla intelectual contra el detective L.", "calificacion": 5, "estado": "Terminado", "imagen": "img/death note.jpeg" },
  { "nombre": "One Piece", "autor": "Eiichiro Oda", "año_estreno": 1999, "genero": ["Aventura", "Acción", "Fantasía"], "reseña": "Monkey D. Luffy y su tripulación navegan en busca del tesoro One Piece para convertirlo en el Rey de los Piratas.", "calificacion": 5, "estado": "En emisión", "imagen": "img/one piece.jpeg" },
  { "nombre": "Demon Slayer", "autor": "Koyoharu Gotouge", "año_estreno": 2019, "genero": ["Acción", "Fantasía", "Shonen"], "reseña": "Tanjiro Kamado se convierte en cazador de demonios tras la masacre de su familia y busca curar a su hermana convertida en demonio.", "calificacion": 5, "estado": "En emisión", "imagen": "img/demon slayer.jpeg" },
  { "nombre": "Jujutsu Kaisen", "autor": "Gege Akutami", "año_estreno": 2020, "genero": ["Acción", "Sobrenatural", "Oscuro"], "reseña": "Yuji Itadori ingiere un objeto maldito y se convierte en anfitrión de un poderoso espíritu, entrando al mundo de los hechiceros.", "calificacion": 5, "estado": "En emisión", "imagen": "img/jujutsu kaisen.jpeg" },
  { "nombre": "Fullmetal Alchemist: Brotherhood", "autor": "Hiromu Arakawa", "año_estreno": 2009, "genero": ["Acción", "Fantasía", "Drama"], "reseña": "Dos hermanos alquimistas buscan recuperar sus cuerpos tras un fallido ritual prohibido.", "calificacion": 5, "estado": "Terminado", "imagen": "img/fullmetal.jpeg" },
  { "nombre": "Tokyo Ghoul", "autor": "Sui Ishida", "año_estreno": 2014, "genero": ["Terror", "Acción", "Psicológico"], "reseña": "Kaneki se convierte en mitad ghoul tras un accidente y lucha por sobrevivir entre humanos y monstruos.", "calificacion": 4, "estado": "Terminado", "imagen": "img/tokyo ghoul.jpeg" },
  { "nombre": "My Hero Academia", "autor": "Kohei Horikoshi", "año_estreno": 2016, "genero": ["Acción", "Superhéroes", "Shonen"], "reseña": "En un mundo donde casi todos tienen poderes, un joven sin habilidades sueña con convertirse en héroe.", "calificacion": 4, "estado": "En emisión", "imagen": "img/myhero.jpeg" },
  { "nombre": "Chainsaw Man", "autor": "Tatsuki Fujimoto", "año_estreno": 2022, "genero": ["Acción", "Terror", "Fantasía oscura"], "reseña": "Denji obtiene poderes de motosierra tras fusionarse con su demonio mascota.", "calificacion": 5, "estado": "En emisión", "imagen": "img/chainsaw.jpeg" },
  { "nombre": "Spy x Family", "autor": "Tatsuya Endo", "año_estreno": 2022, "genero": ["Comedia", "Acción", "Familiar"], "reseña": "Un espía forma una familia falsa sin saber que su esposa es asesina y su hija es telépata.", "calificacion": 4, "estado": "En emisión", "imagen": "img/spy.jpeg" },
  { "nombre": "Made in Abyss", "autor": "Akihito Tsukushi", "año_estreno": 2017, "genero": ["Aventura", "Fantasía oscura", "Ciencia ficción"], "reseña": "Una niña explora un enorme abismo lleno de criaturas y misterios peligrosos.", "calificacion": 5, "estado": "En emisión", "imagen": "img/made in abyss.jpeg" },
  { "nombre": "Re:Creators", "autor": "Rei Hiroe", "año_estreno": 2017, "genero": ["Acción", "Fantasía"], "reseña": "Personajes ficticios aparecen en el mundo real y enfrentan a sus propios creadores.", "calificacion": 4, "estado": "Terminado", "imagen": "img/creators.jpeg" },
  { "nombre": "Dororo", "autor": "Osamu Tezuka", "año_estreno": 2019, "genero": ["Acción", "Fantasía histórica"], "reseña": "Un samurái busca recuperar su cuerpo robado por demonios al nacer.", "calificacion": 4, "estado": "Terminado", "imagen": "img/dororo.jpeg" },
  { "nombre": "Gintama", "autor": "Hideaki Sorachi", "año_estreno": 2006, "genero": ["Comedia", "Acción", "Ciencia ficción"], "reseña": "Un samurái vive en un Japón dominado por alienígenas mientras acepta trabajos extraños.", "calificacion": 5, "estado": "Terminado", "imagen": "img/gintama.jpeg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("animeContainer");
    const filterYear = document.getElementById("filterYear");
    const filterGenre = document.getElementById("filterGenre");
    const filterStatus = document.getElementById("filterStatus");

    // Inicializar filtros y cargar animes
    populateFilters();
    renderAnimes(animes);

    // Escuchar cambios en filtros
    [filterYear, filterGenre, filterStatus].forEach(filter => {
        filter.addEventListener("change", filterAnimes);
    });

    function renderAnimes(data) {
        container.innerHTML = "";
        data.forEach(anime => {
            const card = `
                <div class="col">
                    <div class="card h-100 shadow-sm" style="border: 2px solid var(--pearly-purple);">
                        <img src="${anime.imagen}" class="card-img-top img-news-custom" alt="${anime.nombre}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title" style="font-family: 'Bebas Neue', sans-serif; color: var(--antique-ruby);">${anime.nombre}</h5>
                            <p class="card-text" style="font-family: 'Lora', serif; font-size: 0.9rem;">
                                <strong>Autor:</strong> ${anime.autor}<br>
                                <strong>Estreno:</strong> ${anime.año_estreno}<br>
                                <strong>Género:</strong> ${anime.genero.join(", ")}<br>
                                <strong>Estado:</strong> ${anime.estado}
                            </p>
                            <p class="card-text text-muted" style="font-family: 'Lora', serif; font-size: 0.85rem; flex-grow: 1;">${anime.reseña}</p>
                            <div class="mt-2" style="color: var(--antique-ruby);">${"★".repeat(anime.calificacion)}</div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    function populateFilters() {
        const years = [...new Set(animes.map(a => a.año_estreno))].sort();
        const genres = [...new Set(animes.flatMap(a => a.genero))].sort();

        years.forEach(year => {
            filterYear.innerHTML += `<option value="${year}">${year}</option>`;
        });
        genres.forEach(genre => {
            filterGenre.innerHTML += `<option value="${genre}">${genre}</option>`;
        });
    }

    function filterAnimes() {
        const year = filterYear.value;
        const genre = filterGenre.value;
        const status = filterStatus.value;

        const filtered = animes.filter(anime => {
            return (year === "all" || anime.año_estreno == year) &&
                   (genre === "all" || anime.genero.includes(genre)) &&
                   (status === "all" || anime.estado === status);
        });

        renderAnimes(filtered);
    }
});