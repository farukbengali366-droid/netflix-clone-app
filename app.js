const movies = [
  {
    id: 1,
    title: 'The General',
    year: 1926,
    runtime: '1h 18m',
    genre: 'Comedy',
    age: 'PG',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80',
    description: 'A runaway train engineer and his sweetheart become the center of a thrilling chase across the American West.',
    video: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4',
    section: 'Trending Now'
  },
  {
    id: 2,
    title: 'Safety Last!',
    year: 1923,
    runtime: '1h 39m',
    genre: 'Comedy',
    age: 'PG',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    description: 'An ambitious young man tries to win over his sweetheart while becoming a daring city hero.',
    video: 'https://archive.org/download/ElephantsDream/elephants_dream_512kb.mp4',
    section: 'Trending Now'
  },
  {
    id: 3,
    title: 'Nosferatu',
    year: 1922,
    runtime: '1h 12m',
    genre: 'Horror',
    age: 'PG',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    description: 'A sinister and unforgettable vampire tale that still chills audiences with its expressionist imagery.',
    video: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4',
    section: 'Classic Cinema'
  },
  {
    id: 4,
    title: 'Silent Horizon',
    year: 2024,
    runtime: '1h 48m',
    genre: 'Adventure',
    age: 'PG-13',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80',
    description: 'A brave explorer chases a rumor of a hidden world beyond the desert, with danger at every turn.',
    video: 'https://archive.org/download/ElephantsDream/elephants_dream_512kb.mp4',
    section: 'Adventure'
  },
  {
    id: 5,
    title: 'The Kid',
    year: 1921,
    runtime: '1h 8m',
    genre: 'Drama',
    age: 'PG',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80',
    description: 'A poor tramp becomes unexpectedly attached to a little boy and learns what love truly means.',
    video: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4',
    section: 'Drama'
  },
  {
    id: 6,
    title: 'The Adventures of Prince Achmed',
    year: 1926,
    runtime: '1h 11m',
    genre: 'Fantasy',
    age: 'PG',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    description: 'A dreamy fairy tale of magic, danger, and wonder told through elaborate shadow-puppet animation.',
    video: 'https://archive.org/download/ElephantsDream/elephants_dream_512kb.mp4',
    section: 'Fantasy'
  },
  {
    id: 7,
    title: 'A Trip to the Moon',
    year: 1902,
    runtime: '0h 14m',
    genre: 'Sci-Fi',
    age: 'G',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80',
    description: 'A hilarious and visionary early science-fiction adventure that launched a new cinematic era.',
    video: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4',
    section: 'Sci-Fi'
  },
  {
    id: 8,
    title: 'Big Buck Bunny',
    year: 2008,
    runtime: '0h 10m',
    genre: 'Animation',
    age: 'G',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    background: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80',
    description: 'A free, open-source animated short featuring a charming rabbit, a gang of bullies, and a very sticky situation.',
    video: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4',
    section: 'Animation'
  }
];

const sections = ['Trending Now', 'Classic Cinema', 'Adventure', 'Drama', 'Fantasy', 'Sci-Fi', 'Animation'];

const movieRows = document.getElementById('movieRows');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('movieModal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalRuntime = document.getElementById('modalRuntime');
const modalGenre = document.getElementById('modalGenre');
const modalDescription = document.getElementById('modalDescription');
const modalAge = document.getElementById('modalAge');
const player = document.getElementById('moviePlayer');
const closeModalBtn = document.getElementById('closeModalBtn');
const playHeroBtn = document.getElementById('playHeroBtn');

function buildSection(title, items) {
  const row = document.createElement('div');
  row.className = 'movie-row';

  const heading = document.createElement('h2');
  heading.className = 'row-title';
  heading.textContent = title;

  const cards = document.createElement('div');
  cards.className = 'card-row';

  items.forEach((movie) => {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.innerHTML = `
      <img class="movie-poster" src="${movie.image}" alt="${movie.title} poster" />
      <div class="movie-card-info">
        <h3>${movie.title}</h3>
        <div class="meta">
          <span>${movie.year}</span>
          <span>${movie.runtime}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openMovie(movie));
    cards.appendChild(card);
  });

  row.appendChild(heading);
  row.appendChild(cards);
  return row;
}

function renderRows(filterText = '') {
  movieRows.innerHTML = '';

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterText.toLowerCase()) ||
      movie.genre.toLowerCase().includes(filterText.toLowerCase()) ||
      movie.section.toLowerCase().includes(filterText.toLowerCase());
  });

  const sectionGroups = {};

  filteredMovies.forEach((movie) => {
    if (!sectionGroups[movie.section]) {
      sectionGroups[movie.section] = [];
    }
    sectionGroups[movie.section].push(movie);
  });

  sections.forEach((sectionName) => {
    if (sectionGroups[sectionName]?.length) {
      movieRows.appendChild(buildSection(sectionName, sectionGroups[sectionName]));
    }
  });

  if (!movieRows.children.length) {
    const empty = document.createElement('div');
    empty.className = 'movie-row';
    empty.innerHTML = '<h2 class="row-title">No results found</h2>';
    movieRows.appendChild(empty);
  }
}

function setHeroMovie(movie) {
  const hero = document.querySelector('.hero');
  hero.style.backgroundImage = `url('${movie.background}')`;
  heroTitle.textContent = movie.title;
  heroDescription.textContent = movie.description;
  playHeroBtn.onclick = () => openMovie(movie);
}

function openMovie(movie) {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  modalTitle.textContent = movie.title;
  modalYear.textContent = String(movie.year);
  modalRuntime.textContent = movie.runtime;
  modalGenre.textContent = movie.genre;
  modalDescription.textContent = movie.description;
  modalAge.textContent = movie.age;

  player.src = movie.video;
  player.load();
}

function closeMovie() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  player.pause();
  player.removeAttribute('src');
  player.load();
}

searchInput.addEventListener('input', (event) => {
  renderRows(event.target.value);
});

closeModalBtn.addEventListener('click', closeMovie);
modal.addEventListener('click', (event) => {
  if (event.target.dataset.close === 'true') {
    closeMovie();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeMovie();
  }
});

setHeroMovie(movies[0]);
renderRows();

