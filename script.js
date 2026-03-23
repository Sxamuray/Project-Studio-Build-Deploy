const movies = [
  // Marvel Infinity Saga essentials
  {
    id: "iron-man-2008",
    title: "Iron Man",
    universe: "marvel",
    year: 2008,
    director: "Jon Favreau",
    characters: ["Tony Stark", "Iron Man", "Pepper Potts"],
    poster:
      "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    description:
      "Genius billionaire Tony Stark builds the first Iron Man suit and launches the Marvel Cinematic Universe.",
    tags: ["Infinity Saga", "Origins", "Avengers"],
    phase: "Phase One",
  },
  {
    id: "avengers-2012",
    title: "The Avengers",
    universe: "marvel",
    year: 2012,
    director: "Joss Whedon",
    characters: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"],
    poster:
      "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description:
      "Earth's mightiest heroes assemble for the first time to stop Loki and the Chitauri invasion.",
    tags: ["Team Up", "Infinity Saga"],
    phase: "Phase One",
  },
  {
    id: "winter-soldier-2014",
    title: "Captain America: The Winter Soldier",
    universe: "marvel",
    year: 2014,
    director: "Anthony and Joe Russo",
    characters: ["Captain America", "Black Widow", "Winter Soldier"],
    poster:
      "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    description:
      "Steve Rogers uncovers a conspiracy inside S.H.I.E.L.D. while facing a deadly figure from his past.",
    tags: ["Spy Thriller", "Infinity Saga"],
    phase: "Phase Two",
  },
  {
    id: "guardians-2014",
    title: "Guardians of the Galaxy",
    universe: "marvel",
    year: 2014,
    director: "James Gunn",
    characters: ["Star-Lord", "Gamora", "Rocket", "Groot", "Drax"],
    poster:
      "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    description:
      "A band of misfits must work together to keep a powerful Infinity Stone away from Ronan the Accuser.",
    tags: ["Cosmic", "Infinity Stones"],
    phase: "Phase Two",
  },
  {
    id: "civil-war-2016",
    title: "Captain America: Civil War",
    universe: "marvel",
    year: 2016,
    director: "Anthony and Joe Russo",
    characters: ["Captain America", "Iron Man", "Spider-Man", "Black Panther"],
    poster:
      "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    description:
      "The Avengers split into rival factions after a political clash over superhero accountability.",
    tags: ["Avengers", "Conflict"],
    phase: "Phase Three",
  },
  {
    id: "infinity-war-2018",
    title: "Avengers: Infinity War",
    universe: "marvel",
    year: 2018,
    director: "Anthony and Joe Russo",
    characters: ["Thanos", "Iron Man", "Doctor Strange", "Guardians"],
    poster:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    description:
      "The Avengers and their allies attempt to stop Thanos from collecting all six Infinity Stones.",
    tags: ["Infinity Saga", "Thanos", "Crossover"],
    phase: "Phase Three",
  },
  {
    id: "endgame-2019",
    title: "Avengers: Endgame",
    universe: "marvel",
    year: 2019,
    director: "Anthony and Joe Russo",
    characters: ["Iron Man", "Captain America", "Thor", "Hawkeye"],
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "The surviving Avengers assemble one final time to reverse the devastation caused by Thanos.",
    tags: ["Infinity Saga", "Time Heist", "Finale"],
    phase: "Phase Three",
  },
  // Marvel multiverse and recent hits
  {
    id: "no-way-home-2021",
    title: "Spider-Man: No Way Home",
    universe: "marvel",
    year: 2021,
    director: "Jon Watts",
    characters: ["Peter Parker", "Doctor Strange"],
    poster:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description:
      "A multiverse-breaking spell brings classic Spider-Man villains and familiar faces into the MCU.",
    tags: ["Multiverse", "Spider-Verse"],
    phase: "Phase Four",
  },
  {
    id: "black-panther-2018",
    title: "Black Panther",
    universe: "marvel",
    year: 2018,
    director: "Ryan Coogler",
    characters: ["T'Challa", "Shuri", "Killmonger"],
    poster:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description:
      "T'Challa returns to Wakanda to claim the throne and defend his nation from a powerful challenger.",
    tags: ["Wakanda", "Oscar Winner"],
    phase: "Phase Three",
  },
  {
    id: "ragnarok-2017",
    title: "Thor: Ragnarok",
    universe: "marvel",
    year: 2017,
    director: "Taika Waititi",
    characters: ["Thor", "Hulk", "Loki", "Valkyrie"],
    poster:
      "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    description:
      "Thor races against time to stop Hela and prevent the prophesied destruction of Asgard.",
    tags: ["Cosmic", "Comedy"],
    phase: "Phase Three",
  },
  {
    id: "doctor-strange-2016",
    title: "Doctor Strange",
    universe: "marvel",
    year: 2016,
    director: "Scott Derrickson",
    characters: ["Doctor Strange", "Ancient One", "Wong"],
    poster:
      "https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg",
    description:
      "A brilliant but arrogant surgeon discovers the mystic arts and becomes Earth's Sorcerer Supreme.",
    tags: ["Magic", "Multiverse"],
    phase: "Phase Three",
  },
  // DC classics and modern universe
  {
    id: "batman-begins-2005",
    title: "Batman Begins",
    universe: "dc",
    year: 2005,
    director: "Christopher Nolan",
    characters: ["Bruce Wayne", "Batman", "Ra's al Ghul"],
    poster:
      "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
    description:
      "Bruce Wayne trains with the League of Shadows and becomes Gotham's Dark Knight.",
    tags: ["Origins", "Dark Knight Trilogy"],
  },
  {
    id: "dark-knight-2008",
    title: "The Dark Knight",
    universe: "dc",
    year: 2008,
    director: "Christopher Nolan",
    characters: ["Batman", "Joker", "Harvey Dent"],
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces the Joker in a battle for Gotham's soul in this landmark comic book crime epic.",
    tags: ["Joker", "Oscar Winner"],
  },
  {
    id: "dark-knight-rises-2012",
    title: "The Dark Knight Rises",
    universe: "dc",
    year: 2012,
    director: "Christopher Nolan",
    characters: ["Batman", "Bane", "Catwoman"],
    poster:
      "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    description:
      "Eight years after The Dark Knight, Batman returns from exile to confront Bane and save Gotham.",
    tags: ["Dark Knight Trilogy"],
  },
  {
    id: "man-of-steel-2013",
    title: "Man of Steel",
    universe: "dc",
    year: 2013,
    director: "Zack Snyder",
    characters: ["Superman", "Lois Lane", "General Zod"],
    poster:
      "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    description:
      "Kal-El embraces his destiny as Superman while defending Earth from General Zod.",
    tags: ["DCEU", "Superman"],
  },
  {
    id: "bvs-2016",
    title: "Batman v Superman: Dawn of Justice",
    universe: "dc",
    year: 2016,
    director: "Zack Snyder",
    characters: ["Batman", "Superman", "Wonder Woman"],
    poster:
      "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    description:
      "A fearful Batman confronts Superman as a new threat and a powerful Amazon warrior emerge.",
    tags: ["DCEU", "Trinity"],
  },
  {
    id: "wonder-woman-2017",
    title: "Wonder Woman",
    universe: "dc",
    year: 2017,
    director: "Patty Jenkins",
    characters: ["Diana Prince", "Steve Trevor"],
    poster:
      "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    description:
      "Diana leaves Themyscira to fight alongside humanity during World War I and discovers her full power.",
    tags: ["DCEU", "Origins"],
  },
  {
    id: "aquaman-2018",
    title: "Aquaman",
    universe: "dc",
    year: 2018,
    director: "James Wan",
    characters: ["Arthur Curry", "Mera"],
    poster:
      "https://image.tmdb.org/t/p/w500/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg",
    description:
      "Arthur Curry must embrace his destiny to claim the throne of Atlantis and unite the seven seas.",
    tags: ["DCEU", "Atlantis"],
  },
];

const movieGrid = document.getElementById("movieGrid");
const emptyState = document.getElementById("emptyState");
const timelineList = document.getElementById("timelineList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const movieCardTemplate = document.getElementById("movieCardTemplate");

let currentUniverseFilter = "all";
let currentSearch = "";

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      default:
        return char;
    }
  });
}

function makePosterPlaceholder(title, universe) {
  const isMarvel = universe === "marvel";
  const colorA = isMarvel ? "#e62429" : "#1a9cf7";
  const colorB = isMarvel ? "#f97316" : "#22c55e";
  const label = isMarvel ? "MARVEL" : "DC";

  // Inline SVG placeholder so it works fully as a static GitHub Pages site.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${colorA}" stop-opacity="0.95"/>
      <stop offset="1" stop-color="${colorB}" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="500" height="750" fill="#020617"/>
  <rect width="500" height="750" fill="url(#g)" opacity="0.22"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle"
        font-family="system-ui,Segoe UI,Arial" font-size="26" fill="#f9fafb">${escapeXml(
          title
        )}</text>
  <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle"
        font-family="system-ui,Segoe UI,Arial" font-size="16" fill="#9ca3af">${escapeXml(
          label
        )}</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function buildMovieCard(movie) {
  const fragment = movieCardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".movie-card");
  const poster = fragment.querySelector(".poster");
  const universeBadge = fragment.querySelector(".universe-badge");
  const yearBadge = fragment.querySelector(".year-badge");
  const titleEl = fragment.querySelector(".movie-title");
  const metaEl = fragment.querySelector(".movie-meta");
  const descriptionEl = fragment.querySelector(".movie-description");
  const tagRow = fragment.querySelector(".tag-row");

  poster.src = movie.poster;
  poster.alt = `${movie.title} poster`;
  poster.onerror = () => {
    poster.onerror = null; // Avoid an infinite loop if the placeholder ever fails.
    poster.src = makePosterPlaceholder(movie.title, movie.universe);
  };

  universeBadge.textContent = movie.universe === "marvel" ? "Marvel" : "DC";
  universeBadge.classList.add(movie.universe === "marvel" ? "marvel" : "dc");

  yearBadge.textContent = movie.year;

  titleEl.textContent = movie.title;
  metaEl.textContent = `${movie.director} • ${movie.characters.join(", ")}`;
  descriptionEl.textContent = movie.description;

  const universeTag = document.createElement("span");
  universeTag.className = `tag ${movie.universe}`;
  universeTag.textContent =
    movie.universe === "marvel" ? "Marvel Studios" : "DC";
  tagRow.appendChild(universeTag);

  if (movie.phase) {
    const phaseTag = document.createElement("span");
    phaseTag.className = "tag primary";
    phaseTag.textContent = movie.phase;
    tagRow.appendChild(phaseTag);
  }

  movie.tags.forEach((tagLabel) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagLabel;
    tagRow.appendChild(tag);
  });

  card.dataset.id = movie.id;
  card.dataset.universe = movie.universe;
  card.dataset.year = movie.year;

  return fragment;
}

function renderMovies() {
  movieGrid.innerHTML = "";

  const normalizedSearch = currentSearch.trim().toLowerCase();

  const filtered = movies.filter((movie) => {
    const matchesUniverse =
      currentUniverseFilter === "all" ||
      movie.universe === currentUniverseFilter;

    if (!matchesUniverse) return false;

    if (!normalizedSearch) return true;

    const haystack = [
      movie.title,
      movie.director,
      movie.characters.join(" "),
      movie.tags.join(" "),
      movie.phase || "",
      String(movie.year),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedSearch);
  });

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  const sorted = [...filtered].sort((a, b) => b.year - a.year);

  const fragment = document.createDocumentFragment();
  sorted.forEach((movie) => {
    fragment.appendChild(buildMovieCard(movie));
  });

  movieGrid.appendChild(fragment);
}

function renderTimeline() {
  timelineList.innerHTML = "";

  const byYear = [...movies].sort((a, b) => a.year - b.year);

  byYear.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    const year = document.createElement("span");
    year.className = "timeline-year";
    year.textContent = movie.year;

    const dot = document.createElement("span");
    dot.className = "timeline-dot";

    const title = document.createElement("span");
    title.className = "timeline-title";
    title.textContent = movie.title;

    const universe = document.createElement("span");
    universe.className = "timeline-universe";
    universe.textContent = movie.universe === "marvel" ? "Marvel" : "DC";

    li.appendChild(year);
    li.appendChild(dot);
    li.appendChild(title);
    li.appendChild(universe);
    timelineList.appendChild(li);
  });
}

function handleUniverseFilterClick(event) {
  const btn = event.currentTarget;
  const universe = btn.dataset.universe;
  if (!universe || universe === currentUniverseFilter) return;

  currentUniverseFilter = universe;

  filterButtons.forEach((button) =>
    button.classList.toggle("active", button === btn),
  );

  renderMovies();
}

function handleSearchInput(event) {
  currentSearch = event.target.value || "";
  renderMovies();
}

function setupEventListeners() {
  filterButtons.forEach((button) =>
    button.addEventListener("click", handleUniverseFilterClick),
  );

  searchInput.addEventListener("input", handleSearchInput);
}

function init() {
  renderTimeline();
  renderMovies();
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);

