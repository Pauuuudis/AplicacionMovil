# 🎮 Pokémon App - StickerSmash

Aplicación móvil desarrollada con **React Native y Expo** como proyecto académico.  
La aplicación permite buscar Pokémon y consultar información obtenida mediante un microservicio propio que consume la API pública de Pokémon.

## 📱 Funcionalidades

- 🔎 Búsqueda de Pokémon por nombre.
- 🖼️ Visualización de la imagen principal del Pokémon.
- 👾 Visualización de sprites frontal y trasero.
- 📋 Consulta de información del Pokémon.
- 📊 Visualización de estadísticas.
- ⚔️ Visualización de movimientos.
- 🔄 Uso de React Context para compartir la información entre diferentes pantallas.
- 🌐 Comunicación entre la aplicación móvil, un microservicio propio y PokeAPI.

## 🏗️ Arquitectura

El funcionamiento principal de la aplicación es:

```text
Aplicación React Native
          │
          ▼
   PokemonContext
          │
          ▼
   Microservicio Node.js
          │
          ▼
       PokeAPI
          │
          ▼
   Información Pokémon
