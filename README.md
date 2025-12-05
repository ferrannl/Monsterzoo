# Monsterzoo 🧟‍♂️🦖🧌

**Monsterzoo** is a small browser-based JavaScript project built as an _Eindopdracht JavaScript_ (final assignment).  
It models a zoo full of monsters using modern, modular JavaScript with Webpack bundling.

The core of the app is structured around three main classes:

- `Zoo` – manages the collection of monsters and overall zoo state  
- `Monster` – represents a single monster with its own properties  
- `Monsterconfig` – handles configuration / interaction logic between the UI and the zoo

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Notes](#development-notes)
- [License](#license)

---

## Overview

Monsterzoo is a front-end JavaScript app that demonstrates:

- Object-oriented JavaScript (classes, instances, composition)
- Modular code split across multiple files (`Zoo.js`, `Monster.js`, `Monsterconfig.js`, etc.)
- A Webpack-based build pipeline that bundles everything into a `/dist` folder
- Separation of raw assets (in `resources/`) from compiled output (in `dist/`)

It was originally built as a learning / school project to practice:

- Designing a simple domain model (**Zoo → Monsters**)
- Wiring JavaScript logic to the DOM
- Using Webpack and `html-webpack-plugin` for building and serving the app

---

## Features

> Exact UI details depend on the current `src/` implementation, but conceptually the project includes:

- 🧟 **Monster objects**  
  Encapsulated monster data and behaviour in a dedicated `Monster` class.

- 🦖 **Zoo management**  
  A `Zoo` class maintains a collection of `Monster` instances.

- ⚙️ **Configuration layer**  
  The `Monsterconfig` class connects UI / configuration logic with the `Zoo` and `Monster` classes.

- 📦 **Bundled front-end app**  
  All code is bundled via Webpack into a `dist/bundle.js` and an auto-generated `dist/index.html`.

Use this as a base for experiments, refactors, or new features (e.g. custom monster types, persistence, extra UI, etc.).

---

## Tech Stack

- **Language:** JavaScript (ES6 modules)
- **Bundler:** [Webpack 4](https://webpack.js.org/)
- **Plugin:** [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- **Output:** Static assets in `/dist` (HTML + JS bundle)
- **Package manager:** npm

From `package.json`:

```json
{
  "name": "monsterzoo",
  "version": "1.0.0",
  "scripts": {
    "builddev": "webpack --watch --devtool sourcemap",
    "build": "webpack"
  },
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2"
  }
}
