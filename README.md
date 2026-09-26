# 🎮 Aplicación Móvil - Pokémon

Aplicación móvil desarrollada con **React Native, Expo y TypeScript** como proyecto académico.

El proyecto permite consultar información de diferentes Pokémon mediante una aplicación móvil. Para obtener los datos se implementó un **microservicio propio con Node.js y Express**, encargado de comunicarse con la API pública **PokeAPI**.

---

## 📱 Descripción

La aplicación permite al usuario:

- 🔎 Buscar un Pokémon por su nombre.
- 🖼️ Visualizar su imagen principal.
- 👾 Visualizar sus sprites frontal y trasero.
- 📋 Consultar información general.
- 📊 Consultar sus estadísticas.
- ⚔️ Consultar algunos de sus movimientos.
- 🔄 Compartir la información entre diferentes pantallas mediante **React Context**.

---

## 🏗️ Arquitectura del proyecto

La aplicación utiliza una arquitectura sencilla donde el frontend se comunica con un microservicio propio.

```text
┌─────────────────────────┐
│     Aplicación móvil    │
│    React Native + Expo  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    PokemonContext       │
│      React Context      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Microservicio      │
│     Node.js + Express   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│         PokeAPI         │
│    API pública REST     │
└─────────────────────────┘
