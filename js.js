// ============================================
// CONFIGURACIÓN SIMPLE
// ============================================
const CONFIG = {
    initialMovies: 20,      // Mostrar 20 películas inicialmente
    loadMoreCount: 20       // Cargar 20 más cada vez
};

// ============================================
// DATOS DE PELÍCULAS (CORREGIDOS)
// ============================================
const movies = [
    // CORREGÍ LOS IDs DUPLICADOS
{ id: 1, image: "Prueba.jpg", titulo: "1978", espanol: "Milnove",  ano: 2024,  generos: ["Terror", "Suspenso"], sinopsis: "Durante la final del Mundial de Fútbol entre Argentina y Holanda, en tiempos de dictadura militar, un grupo de torturadores secuestra a un grupo de jóvenes. Lo que comienza como un interrogatorio inhumano se convierte en un infierno: han secuestrado al grupo equivocado."},
{ id: 2, image: "Prueba.jpg", titulo: "1992", espanol: "1992 Noche sin ley",  ano: 2024,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "En 1992, Mercer intenta desesperadamente reconstruir su vida y su relación con su hijo en medio de los disturbios que sacudieron Los Ángeles tras el veredicto del caso de Rodney King. Al otro lado de la ciudad, otro padre y su hijo ponen a prueba su tensa relación al planear un peligroso robo para sustraer convertidores catalíticos, que contienen platino valioso, de la fábrica donde trabaja Mercer. A medida que aumentan las tensiones y estalla el caos, ambas familias llegan a su límite cuando sus mundos chocan."},
{ id: 3, image: "Prueba.jpg", titulo: "007 No time to die", espanol: "Sin tiempo para morir",  ano: 2021,  generos: ["Acción", "Aventura", "Suspenso"], sinopsis: "James Bond se encuentra disfrutando de unas merecidas vacaciones en Jamaica. Sin embargo, su paz termina cuando su amigo de la CIA, Felix Leiter, lo busca para una nueva misión que implica rescatar a un importante científico que ha sido secuestrado."},
{ id: 4, image: "Prueba.jpg", titulo: "10 lives", espanol: "Un Gato Con Suerte",  ano: 2024,  generos: ["Animación", "Comedia", "Aventura"], sinopsis: "Beckett es un gato mimado y egoísta que da por sentada la suerte que le ha tocado. Sin embargo, todo eso está a punto de cambiar cuando pierde por descuido su novena vida. Ante lo inevitable, suplica que le permitan volver a su vida perfecta."},
{ id: 5, image: "Prueba.jpg", titulo: "12 rounds", espanol: "12 desafíos",  ano: 2009,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "El detective Danny Baxter (John Cena) está a punto de tener el peor día de su vida cuando un criminal y terrorista, Miles Jackson (Aiden Gillen), que se ha escapado de prisión tras haber sido detenido por Baxter, secuestra a su novia (Ashley Scott) y lo reta a 12 pruebas para salvarla en las calles de Nueva Orleans."},
{ id: 6, image: "Prueba.jpg", titulo: "21 Bridges", espanol: "Nueva York sin salida",  ano: 2019,  generos: ["Acción", "Suspenso", "Drama"], sinopsis: "Andre Davis (Chadwick Boseman) es un detective de Nueva York al que le encargan la investigación del asesinato de varios policías. Durante la búsqueda contrarreloj de los responsables, el agente comienza a sospechar que quizás haya algo mucho más importante detrás de su caso."},
{ id: 7, image: "Prueba.jpg", titulo: "28 Years Later", espanol: "Exterminio La Evolución",  ano: 2025,  generos: ["Terror", "Suspenso", "Ciencia ficción"], sinopsis: "Años transcurridos tras los sucesos de 28 semanas después, el virus de la ira ha regresado y un grupo de supervivientes debe sobrevivir en un mundo asolado por hordas de infectados. Realizada con un iPhone 15 Pro Max y con la ayuda de numerosos accesorios especializados."},
{ id: 8, image: "Prueba.jpg", titulo: "3 metros sobre el cielo", espanol: "",  ano: 2010,  generos: ["Drama", "Romance"], sinopsis: "3 metros sobre el cielo es un drama romántico adolescente que narra la historia de dos jóvenes que pertenecen a mundos opuestos. Es la crónica de una relación improbable, casi imposible, pero inevitable, que terminará arrastrando a la pareja a un frenético viaje iniciático en donde juntos descubrirán el primer gran amor. Ella (María Valverde) es una chica de clase media-alta que está educada en la bondad, en la inocencia y en las normas. Él (Mario Casas) es un chico rebelde, impulsivo, inconsciente, aficionado al riesgo y al peligro enzarzado en un sinfín de peleas y carreras ilegales de motos, al límite del sentido común."},
{ id: 9, image: "Prueba.jpg", titulo: "65", espanol: "65 al borde de la extinción",  ano: 2023,  generos: ["Ciencia ficción", "Aventura", "Suspenso"], sinopsis: "Después de un catastrófico accidente en un planeta desconocido, el piloto Mills descubre rápidamente que realmente está varado en la Tierra… hace 65 millones de años. Ahora, con solo una oportunidad de rescate, Mills y la otra única superviviente, Koa, deberán abrirse camino a través del desconocido territorio plagado con peligrosas criaturas prehistóricas en una épica lucha por sobrevivir."},
{ id: 10, image: "Prueba.jpg", titulo: "7 seconds", espanol: "7 segundos",  ano: 2005,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "Jack Tolliver es un antiguo miembro de los Delta Force al mando de lo que iba a ser un robo de coches perfectamente sincronizado. En lugar de ello, acaba con una obra de Van Gogh de valor incalculable entre las manos, y uno de sus hombres es tomado como rehén por los mafiosos rusos que se han entrometido en el golpe. Un rescate suicida es la única opción que le queda para sobrevivir a la pesadilla en la que se ha convertido su objetivo."},
{ id: 11, image: "Prueba.jpg", titulo: "A Normal Woman", espanol: "Una mujer normal",  ano: 2025,  generos: ["Drama", "Suspenso", "Terror"], sinopsis: "Cuando una enfermedad desconocida empieza a afectar a su vida, una mujer de la ‘jet set’ debe desentrañar el misterio tras esta antes de perderse por completo a sí misma."},
{ id: 12, image: "Prueba.jpg", titulo: "A Quiet Place Day One", espanol: "Un lugar en silencio Día uno",  ano: 2024,  generos: ["Terror", "Suspenso", "Ciencia ficción"], sinopsis: "Una mujer llamada Sam trata de sobrevivir a una invasión en la ciudad de Nueva York por criaturas alienígenas sedientas de sangre con oídos ultrasónicos. Tercera entrega de la saga y precuela de las dos anteriores."},
{ id: 13, image: "Prueba.jpg", titulo: "A Rainy Day In New-York", espanol: "Día de lluvia en Nueva York",  ano: 2019,  generos: ["Comedia", "Romance"], sinopsis: "Dos jóvenes llegan a Nueva York durante un fin de semana donde se topan con el mal tiempo y una serie de aventuras."},
{ id: 14, image: "Prueba.jpg", titulo: "A través de mi ventana", espanol: "",  ano: 2023,  generos: ["Drama", "Romance",], sinopsis: "Raquel lleva toda la vida loca por Ares, su atractivo y misterioso vecino. Lo observa sin ser vista y es que, muy a su pesar, no han intercambiado ni una palabra. Raquel tiene muy claro su objetivo: conseguir que Ares se enamore de ella. Pero ella no es una niña inocente y no está dispuesta a perderlo todo por el camino, y mucho menos a sí misma."},
{ id: 15, image: "Prueba.jpg", titulo: "Absolute power (Poder absoluto)", espanol: "Poder absoluto",  ano: 1997,  generos: ["Crimen", "Drama", "Acción"], sinopsis: "Un ladrón es testigo de un asesinato que involucra al Presidente de los Estados Unidos. Se ve obligado a huir, aunque tiene pruebas que podrían condenar al Presidente. Un thriller político dirigido y protagonizado por Clint Eastwood y basado en una novela de David Baldacci."},
{ id: 16, image: "Prueba.jpg", titulo: "After We Collided", espanol: "After en Mil Pedazos 2",  ano: 2020,  generos: ["Drama", "Romance"], sinopsis: "Ha pasado el tiempo, y Hardin todavía no se sabe si es realmente el chico profundo y reflexivo del que Tessa se enamoró, o ha sido un extraño todo este tiempo. Ella quiere alejarse, pero no es tan fácil. Tessa se ha centrado en sus estudios y comienza a trabajar como becaria en Vance Publishing. Allí conoce a Trevor, un nuevo y atractivo compañero de trabajo que es exactamente el tipo de persona con la que debería estar. Pero Hardin sabe que cometió un error, posiblemente el más grande de su vida y quiere corregir sus errores y vencer a sus demonios."},
{ id: 17, image: "Prueba.jpg", titulo: "Alien Romulus", espanol: "",  ano: 2024,  generos: ["Terror", "Ciencia ficción", "Suspenso"], sinopsis: "Mientras rebuscan en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo. Nueva película de la saga Alien."},
{ id: 18, image: "Prueba.jpg", titulo: "All Quiet on the Western Front", espanol: "Sin novedad en el frente",  ano: 2022,  generos: ["Bélico", "Drama", "Histórico"], sinopsis: "Paul Baumer y sus amigos Albert y Muller, incitados por sueños románticos de heroísmo, se alistan voluntariamente en el ejército alemán. Llenos de emoción y fervor patriótico, los muchachos marchan con entusiasmo hacia una guerra en la que creen. Pero una vez en el frente occidental, descubren el horror destructor del alma de la Primera Guerra Mundial."},
{ id: 19, image: "Prueba.jpg", titulo: "Alvin and the Chipmunks The Squeakquel", espanol: "Alvin Y Las Ardillas 2",  ano: 2009,  generos: ["Animación", "Comedia", "Música"], sinopsis: "Las ardillas más famosas y divertidas del cine regresan a la gran pantalla para protagonizar una nueva aventura. En ella, Alvin y sus compañeros deben enfrentarse a la presión de la escuela, a los problemas de la celebridad y a un grupo de chicas ardilla que les está haciendo la competencia"},
{ id: 20, image: "Prueba.jpg", titulo: "American Psycho", espanol: "Psicópata americano",  ano: 2000,  generos: ["Suspenso", "Drama", "Crimen"], sinopsis: "En un mundo moralmente plano en el que la ropa tiene más sentido que la piel, Patrick Bateman es un espécimen soberbiamente elaborado que cumple todos los requisitos de Master del Universo, desde el diseño de su vestuario hasta el de sus productos químicos. Es prácticamente perfecto, como casi todos en su mundo e intenta desesperadamente encajar en él. Cuando más intenta ser como cualquier otro hombre adinerado de Wall Street, más anónimo se vuelve y menos control tiene sobre sus terribles instintos y su insaciable sed de sangre, que lo arrastra a una vorágine en la que los objetos valen más que el cuerpo y el alma de una persona."},
{ id: 21, image: "Prueba.jpg", titulo: "Ant-Man and the Wasp Quantumania", espanol: "El hombre hormiga y la Avispa Quantumanía",  ano: 2023,  generos: ["Superhéroes", "Acción", "Aventura"], sinopsis: "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible."},
{ id: 22, image: "Prueba.jpg", titulo: "Apocalypse Z", espanol: "Apocalipsis Z El principio del fin",  ano: 2024,  generos: ["Acción", "Terror", "Drama"], sinopsis: "Cuando una especie de rabia que transforma a la gente en criaturas agresivas se extiende por el planeta, Manel se aísla en casa con su gato, recurriendo a su ingenio para sobrevivir; pero pronto deberán salir a buscar comida, por tierra y por mar, sorteando muchos peligros."},
{ id: 23, image: "Prueba.jpg", titulo: "Argylle", espanol: "Argylle Agente Secreto",  ano: 2024,  generos: ["Acción", "Comedia", "Aventura"], sinopsis: "Cuando las tramas de sus libros empiezan a parecerse demasiado a las actividades de un siniestro sindicato clandestino, la introvertida autora de novelas de espías Elly Conway y su gato se ven inmersos en el verdadero mundo del espionaje… donde nada, ni nadie, es lo que parece."},
{ id: 24, image: "Prueba.jpg", titulo: "Asiento mortal", espanol: "She Rides Shotgun",  ano: 2025,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "Tras salir de prisión, Nate debe proteger a su hija Polly de una peligrosa banda que ha puesto precio a sus vidas. Juntos emprenden una huida violenta y desesperada por el desierto, mientras él le enseña a sobrevivir en un mundo brutal. En el camino, padre e hija forjan un profundo vínculo marcado por la redención y el crecimiento mutuo... Adaptación de la premiada novela de Jordan Harper."},
{ id: 25, image: "Prueba.jpg", titulo: "Astérix e Obélix L'Empire du Milieu", espanol: "Astérix y Obélix y el reino del medio",  ano: 2023,  generos: ["Animación", "Comedia", "Aventura"], sinopsis: "Es el año 50 A.C., la Emperatriz de China acaba de ser encarcelada tras un golpe de Estado incitado por Dang Sin Kuing, un príncipe traidor. Ayudada por Granodemaíz, el comerciante fenicio, y su fiel guardaespaldas Wang Tah, la única hija de la Emperatriz, la Princesa Fo Yong, huye a la Galia para pedir ayuda a dos valientes guerreros, Astérix y Obélix, quienes están dotados de una fuerza sobrehumana gracias a su poción mágica. Nuestros dos inseparables galos aceptan por supuesto ayudar a la Princesa a salvar a su madre y liberar a su país. Y así comienza un gran viaje y aventura rumbo a China. Pero César y su poderoso ejército, sedientos de una nueva conquista, también se dirigen hacia el Reino Medio."},
{ id: 26, image: "Prueba.jpg", titulo: "At midnight", espanol: "A medianoche",  ano: 2023,  generos: ["Comedia", "Romance", "Drama"], sinopsis: "El ambicioso gerente de hotel, Alejandro, y la estrella de cine, Sophie, se encuentran cuando el destino golpea cuando el rodaje los lleva a todos al hotel de Alejandro en México. A pesar de sus vidas radicalmente diferentes, Alejandro y Sophie comienzan a encontrarse en secreto a medianoche."},
{ id: 27, image: "Prueba.jpg", titulo: "Aterrados", espanol: "",  ano: 2018,  generos: ["Terror", "Suspenso"], sinopsis: "Algo muy extraño está pasando en un barrio del conurbano bonaerense. Objetos que se mueven, apariciones extrañas y cañerías que hablan son los primeros indicios de que lo Paranormal –así, en mayúsculas– vino para quedarse. Azorado, el Comisario Funes convoca a Mario Jano para que lo ayude a desentrañar el misterio. Se les unirán la doctora Albrec y el norteamericano Rosentok, formando un grupo de investigación que vivirá una verdadera escalada a la locura."},
{ id: 28, image: "Prueba.jpg", titulo: "Avatar Fire and Ash", espanol: "Avatar Fuego y Cenizas",  ano: 2025,  generos: ["Ciencia ficción", "Aventura", "Acción"], sinopsis: "Jake Sully y Neytiri enfrentan una nueva amenaza en Pandora: los Ash People, una tribu Na'vi violenta y sedienta de poder, liderada por la implacable Varang. Tras la devastadora guerra contra la RDA y la pérdida de su hijo mayor, la familia de Jake deberá luchar por su supervivencia y el futuro de Pandora en un conflicto que llevará a los personajes a sus límites emocionales y físicos. Con nuevos y antiguos aliados, esta épica visual y emocional redefine el destino de un mundo al borde del abismo."},
{ id: 29, image: "Prueba.jpg", titulo: "Bad Boys 4", espanol: "Bad Boys Hasta la muerte",  ano: 2024,  generos: ["Acción", "Comedia", "Suspenso"], sinopsis: "Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga 'Dos policías rebeldes'."},
{ id: 30, image: "Prueba.jpg", titulo: "Bad Guys 2", espanol: "Los tipos malos 2",  ano: 2025,  generos: ["Animación", "Comedia", "Acción"], sinopsis: "Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos, pero se ven envueltos involuntariamente en un golpe de envergadura mundial planeado por un inesperado grupo de criminales: las Tipas Malas."},
{ id: 31, image: "Prueba.jpg", titulo: "Bagman", espanol: "El hombre del saco",  ano: 2024,  generos: ["Terror", "Suspenso"], sinopsis: "Durante siglos, los padres han advertido a sus hijos sobre el temible Hombre del Saco, un ser maligno que rapta a niños inocentes y los aparta para siempre de sus familias. Patrick (Sam Claflin) escapó de sus garras por los pelos en su infancia, pero el trauma que le generó aquel encuentro le ha perseguido desde entonces. Tras mudarse a su antigua casa familiar con su esposa e hijo, Patrick descubrirá que la tenebrosa criatura continúa allí, acechando sus pesadillas y amenazando con arrebatarle aquello que más quiere en el mundo."},
{ id: 32, image: "Prueba.jpg", titulo: "Ballad of a Small Player", espanol: "Maldita suerte",  ano: 2025,  generos: ["Suspenso", "Acción", "Crimen"], sinopsis: "En los deslumbrantes casinos de Macao, un jugador que huye de su pasado queda fascinado por una enigmática mujer en la mesa de bacará."},
{ id: 33, image: "Prueba.jpg", titulo: "Ballerina", espanol: "Bailarina",  ano: 2023,  generos: ["Acción", "Suspenso"], sinopsis: "Ok Ju solía trabajar como guardaespaldas. Destaca en actividades físicas como las artes marciales, la lucha con espadas, la puntería y la conducción de motos. Ok Ju es amiga de Min Hee, que es bailarina. Min Hee le pide a Ok Ju un favor. Quiere que Ok Ju se vengue de Pro Choi. Ok Ju pronto arriesga su vida por Min Hee."},
{ id: 34, image: "Prueba.jpg", titulo: "Ballerina", espanol: "Del universo de John Wick Bailarina",  ano: 2025,  generos: ["Acción", "Crimen", "Suspenso"], sinopsis: "Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma organización criminal encargada del adiestramiento de John Wick. En esta violenta historia de venganza, Eve intentará por todos los medios averiguar quién está detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental, donde descubrirá que existen secretos ocultos sobre su pasado."},
{ id: 35, image: "Prueba.jpg", titulo: "Barbie", espanol: "",  ano: 2023,  generos: ["Comedia", "Romance", "Aventura"], sinopsis: "Barbie vive en Barbieland donde todo es ideal y lleno de música y color. Un buen día decide conocer el mundo real. Cuando el CEO de Mattel se entere, tratará de evitarlo a toda costa y devolver a Barbie a una caja."},
{ id: 36, image: "Prueba.jpg", titulo: "Bastion 36", espanol: "",  ano: 2025,  generos: ["Acción", "Crimen", "Suspenso"], sinopsis: "Cuando lo expulsan de su unidad, un agente conflictivo investiga, por su cuenta y de forma clandestina, quién es el responsable del misterioso asesinato de sus excompañeros."},
{ id: 37, image: "Prueba.jpg", titulo: "Batman The Doom That Came to Gotham", espanol: "Batman- La perdición que llegó a Ciudad Gótica",  ano: 2023,  generos: ["Animación", "Superhéroes", "Acción"], sinopsis: "El explorador Bruce Wayne desata accidentalmente un antiguo mal y regresa a Ciudad Gótica después de estar fuera durante dos décadas. Allí, Batman lucha contra las fuerzas sobrenaturales de Lovecraft y se encuentra con aliados y enemigos como Green Arrow, Ra's al Ghul, Mr. Freeze, Killer Croc, Two-Face y James Gordon."},
{ id: 38, image: "Prueba.jpg", titulo: "Beetlejuice Beetlejuice", espanol: "Bitelchús Bitelchús",  ano: 2024,  generos: ["Comedia", "Terror", "Fantasía"], sinopsis: "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a Winter River. La vida de Lydia, todavía atormentada por Bitelchús, da un vuelco cuando su rebelde hija adolescente, Astrid, descubre la misteriosa maqueta de la ciudad en el desván y el portal al Más Allá se abre accidentalmente. Con los problemas que se avecinan en ambos reinos, es sólo cuestión de tiempo que alguien diga el nombre de Bitelchús tres veces y el travieso demonio regrese para desatar su propio caos."},
{ id: 39, image: "Prueba.jpg", titulo: "Blowback", espanol: "Robo Entre Ladrones",  ano: 2023,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "Cuando un maestro ladrón es traicionado durante un atraco a un banco y dado por muerto, busca vengarse de su antiguo equipo, un objetivo a la vez. Ahora, con la policía y la mafia acercándose, está en la carrera de su vida para reclamar una fortuna incalculable en criptomonedas de aquellos que lo traicionaron."},
{ id: 40, image: "Prueba.jpg", titulo: "Bodies at rest", espanol: "Testigos silenciosos",  ano: 2019,  generos: ["Acción", "Suspenso", "Crimen"], sinopsis: "En mitad de la noche, unos intrusos armados irrumpen en una morgue buscando un cadáver relacionado con un crimen reciente."},
{ id: 41, image: "Prueba.jpg", titulo: "Breaking", espanol: "Grieta",  ano: 2022,  generos: ["Crimen", "Suspenso", "Acción"], sinopsis: "Basada en hechos reales, esta película sigue la historia de Brian Easley, un exmarine estadounidense que lucha por adaptarse a la vida civil tras su regreso. Desesperado por recuperar los beneficios económicos que le corresponden, se ve envuelto en un incidente inesperado al tomar como rehenes a dos empleadas de un banco. Su única intención es dar a conocer su situación al mundo y obtener la atención que merece. Esta emocionante cinta explora las complejidades del sistema y muestra el poder de la determinación individual en busca de justicia."},
{ id: 42, image: "Prueba.jpg", titulo: "Brick", espanol: "El muro negro",  ano: 2025,  generos: ["Acción", "Suspenso", "Ciencia ficción"], sinopsis: "Cuando un misterioso muro de ladrillo aparece inesperadamente en torno a su edificio, Tim y Olivia deberán colaborar con sus vecinos para encontrar una salida."},
{ id: 43, image: "Prueba.jpg", titulo: "Bullet Train", espanol: "Tren bala",  ano: 2022,  generos: ["Suspenso", "Acción", "Comedia"], sinopsis: "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final."},
{ id: 44, image: "Prueba.jpg", titulo: "Cinderella", espanol: "Cenicienta",  ano: 2021,  generos: ["Fantasía", "Romance", "Comedia"], sinopsis: "Una reinvención moderna del cuento tradicional de la niña huérfana con una madrastra malvada."},
{ id: 45, image: "Prueba.jpg", titulo: "Civil War", espanol: "Guerra civil",  ano: 2024,  generos: ["Bélica", "Acción", "Drama"], sinopsis: "En un futuro cercano, donde América está sumida en una cruenta guerra civil, un equipo de periodistas y fotógrafos de guerra emprenderá un viaje por carretera en dirección a Washington DC. Su misión: llegar antes de que las fuerzas rebeldes asalten la Casa Blanca y arrebaten el control al presidente de Estados Unidos."}
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
                <h3>No se encontraron películas con estas características.</h3>
                <p>Pruebe con otra búsqueda o selección de género.</p>
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
        Mostrando ${moviesToShow.length} películas
    </div>
    `;
    
    // Botón "Mostrar más" si hay más películas
    if (visibleMovies < filteredMovies.length) {
        const remaining = filteredMovies.length - moviesToShow.length;
        html += `
        <div class="show-more-container">
            <button class="show-more-btn" id="showMoreBtn">
            Mostrar más películas
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