# HeroVerse Cinema – Marvel & DC Movie Explorer

HeroVerse Cinema is a single-page web application that showcases some of the best Marvel and DC movies using responsive UI cards, filters, and search. It is built with vanilla HTML, CSS, and JavaScript and designed to be deployed as a static site on GitHub Pages.

## Project Spec (Short)

- **Goal**: Let users quickly browse iconic Marvel and DC movies using a clean, modern interface.
- **Core features**:
  - **Movie cards**: Each film is shown as an interactive card with a poster, title, director, key characters, tags, and release year.
  - **Universe filters**: Toggle between Marvel, DC, or view all movies.
  - **Search**: Filter movies instantly by title, character name, director, year, or tag.
  - **Timeline sidebar**: Chronological list of the selected movies, showing how the films are spread across years and universes.
- **Tech stack**: HTML5, modern CSS (no frameworks), vanilla JavaScript.
- **Deployment target**: GitHub Pages (static hosting from the repository).

## File Structure

- `index.html` – Main page markup and movie card template.
- `style.css` – Layout, typography, color system, and responsive styles.
- `script.js` – Movie dataset and UI logic for rendering, filtering, and searching.

## How It Works

1. **Dataset**  
   A curated list of Marvel and DC films is stored in `script.js` as an array of JavaScript objects. Each movie includes:
   - `title`, `universe` (`marvel` or `dc`), `year`, `director`
   - `characters`, `tags`, and optional `phase`
   - `poster` URL (from TMDB-style image endpoints)

2. **Rendering**  
   - The app uses a `<template>` in `index.html` to generate each movie card.
   - JavaScript clones the template, fills in movie data, and appends the cards to the grid.
   - A separate rendering function builds a chronological timeline in the sidebar.

3. **Filtering and Search**  
   - Universe filter buttons update a `currentUniverseFilter` state and re-render the visible movies.
   - The search input listens for `input` events and filters movies by title, director, characters, tags, phase, or year text.

## Running Locally

1. Clone or download the repository.
2. Open `index.html` directly in a modern browser  
   or serve the folder with a simple static server (for example, using VS Code Live Server).

No build process or additional dependencies are required.

## GitHub Setup and Deployment (GitHub Pages)

From the project root in your terminal:

1. **Initialize and commit (if not already)**:

   ```bash
   git add .
   git commit -m "Initial HeroVerse Cinema movie app"
   ```

2. **Create the GitHub repository**:

   - Go to GitHub and create a new repository with the same name as this folder, or any name you prefer.
   - Back in the terminal, add the remote and push:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:

   - In the GitHub repository, open **Settings** → **Pages**.
   - Under **Source**, select **Deploy from a branch**.
   - Choose branch `main` and folder `/ (root)`, then save.

4. **Access the live site**:  
   After a short build, your app will be live at:

   ```text
   https://<your-username>.github.io/<your-repo>/
   ```

## Development Notes

- The app intentionally uses no frameworks to keep it lightweight and easy to understand for a front-end fundamentals project.
- Movie data can be extended by adding more entries to the `movies` array in `script.js`.
- Styling emphasizes contrast, cinematic colors, and readable typography to echo the feel of a streaming gallery.

