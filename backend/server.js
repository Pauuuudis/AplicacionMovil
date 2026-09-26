const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/consultaPokemon", async (req, res) => {
  try {
    const { pokemon } = req.body;

    if (!pokemon) {
      return res.status(400).json({
        error: "Debes enviar un Pokémon",
      });
    }

    const nombre = pokemon.toString().toLowerCase().trim();

    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombre}`
    );

    if (!respuesta.ok) {
      return res.status(404).json({
        error: "Pokémon no encontrado",
      });
    }

    const data = await respuesta.json();

    const resultado = {
      id: data.id,
      name: data.name,

      image:
        data.sprites.other["official-artwork"].front_default,

      imageFront: data.sprites.front_default,

      imageBack: data.sprites.back_default,

      height: data.height,

      weight: data.weight,

      species: data.species.name,

      moves: data.moves.map((item) => item.move.name),

      stats: data.stats.map((item) => ({
        name: item.stat.name,
        value: item.base_stat,
      })),
    };

    res.json(resultado);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    mensaje: "Microservicio funcionando",
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor ejecutándose en puerto 3000");
});