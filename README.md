# Monsterzoo 🐲

**Monsterzoo** is a small browser-based JavaScript game built as an _Eindopdracht JavaScript_ (final assignment).  
You manage a zoo full of monsters: create them, customize them, place them on different fields, and move or delete them while dealing with changing weather conditions.

---

## Table of Contents

- [Overview](#overview)
- [Game Mechanics & Features](#game-mechanics--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Notes](#development-notes)
- [Authors](#authors)
- [License](#license)

---

## Overview

Monsterzoo is a front-end JavaScript app that demonstrates:

- Object-oriented JavaScript (classes, instances, composition)
- Modular code split across multiple files (`Zoo.js`, `Monster.js`, `Monsterconfig.js`, etc.)
- A Webpack-based build pipeline that bundles everything into a `/dist` folder
- Separation of raw assets (in `resources/`) from compiled output (in `dist/`)

It was originally built as a school project to practice:

- Designing a simple domain model (**Zoo → Monsters**)
- Wiring JavaScript logic to the DOM
- Using Webpack and `html-webpack-plugin` for building and bundling the app

You can also download a packaged build from the **Releases** page:
- 👉 [Releases](https://github.com/ferrannl/Monsterzoo/releases)

---

## Game Mechanics & Features

From the original project description:

> **Monster Zoo** – Create, customize, place, move and delete monsters on different fields (with different weather conditions).

Conceptually, the project includes:

- **Monster objects**  
  Encapsulated monster data and behaviour in a dedicated `Monster` class.

- **Zoo management**  
  A `Zoo` class maintains a collection of `Monster` instances and represents the overall zoo state.

- **Configuration / controller layer**  
  The `Monsterconfig` class connects UI & configuration logic with the `Zoo` and `Monster` classes.

- **Field & weather system**  
  Monsters can be placed on different fields; fields can have different weather conditions that influence the game experience.

- **Bundled front-end app**  
  All code is bundled via Webpack into a JS bundle and HTML entrypoint in `dist/`.

This repo is a good base if you want to:

- Add new monster types (with custom stats or abilities)
- Extend the field / weather system
- Persist monster setups in `localStorage` or an API
- Refactor the architecture into a more formal MVC / MVVM pattern

---

## Tech Stack

- **Language:** JavaScript (ES6 modules)
- **Bundler:** Webpack 4
- **Plugin:** `html-webpack-plugin`
- **Output:** Static assets in `/dist` (HTML + JS bundle)
- **Package manager:** npm
- **Build tooling:** Node-based Webpack configuration (`webpack.config.js`)

From `package.json`:

```json
{
  "name": "monsterzoo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "builddev": "webpack --watch --devtool sourcemap",
    "build": "webpack"
  },
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2"
  },
  "license": "ISC"
}


---

Project Structure

High-level structure of the repository:

Monsterzoo/
├─ dist/                 # Webpack build output (bundled JS + generated HTML)
├─ node_modules/         # Installed dependencies (not tracked in Git)
├─ resources/            # Raw assets/resources used by the project
├─ src/                  # Source JavaScript (ES6 modules)
│  ├─ Monster.js         # Monster class (single monster behaviour/data)
│  ├─ Monsterconfig.js   # Configuration/controller logic
│  ├─ Zoo.js             # Zoo class (collection of monsters + state)
│  └─ index.js           # Main entrypoint hooking into the DOM
├─ .gitattributes
├─ .gitignore
├─ index.html            # Redirect/helper (not the built app itself)
├─ package.json          # Project metadata, scripts & devDependencies
├─ package-lock.json
└─ webpack.config.js     # Webpack configuration

> Note: The actual built game is served from the dist folder after running one of the build scripts.




---

Getting Started

Prerequisites

Node.js (which includes npm)


1. Clone the repository

git clone https://github.com/ferrannl/Monsterzoo.git
cd Monsterzoo

2. Install dependencies

npm install

3. Build the project

For a one-off production build:

npm run build

This compiles the app into the dist/ folder.

For development (watch mode with source maps):

npm run builddev

4. Run the app in a browser

You can open the built app by serving the dist/ folder with any static file server, for example:

# Using npx and a simple static server
npx serve dist

Or use any other local HTTP server / IDE plugin (e.g. VS Code Live Server) pointing at the dist/ directory, then open it in your browser.


---

Available Scripts

In the project directory, you can run:

npm run builddev

Runs Webpack in watch mode

Generates source maps for easier debugging

Rebuilds the bundle whenever you change files in src/


npm run build

Runs a one-off Webpack build

Outputs optimized files into dist/


npm test

Currently just a placeholder script (prints an error and exits).

Replace this with your own test runner (e.g. Jest) if you add tests.




---

Development Notes

This is a school project and focuses on clarity & learning over advanced patterns.

The codebase is intentionally small and modular, making it a nice playground for:

Refactoring to different architectures

Adding new types of monsters

Introducing state management, unit tests, or a UI framework if desired



If you fork this project and experiment with it, feel free to:

Add tests and hook them into npm test

Improve accessibility / UX

Add more game rules (e.g. monster stats vs. weather, field effects, etc.)



---

Authors

From the original project & release:

Mathijs van Wijk

Ferran Hendriks (repository owner: @ferrannl)



---

License

This project is licensed under the ISC License (see package.json).
You are free to use, modify and share the code under the terms of that license.
