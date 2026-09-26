import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";

import { useState } from "react";
import { usePokemon } from "../../context/PokemonContext";

export default function Index() {
  const [nombre, setNombre] = useState("");

  const {
    pokemon,
    loading,
    error,
    buscarPokemon,
  } = usePokemon();

  const consultarPokemon = () => {
    if (nombre.trim() !== "") {
      buscarPokemon(nombre);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Buscar Pokémon
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ej: pikachu"
          value={nombre}
          onChangeText={setNombre}
        />

        <Pressable
          style={styles.button}
          onPress={consultarPokemon}
        >
          <Text style={styles.buttonText}>
            🔍
          </Text>
        </Pressable>
      </View>

      {loading && (
        <Text style={styles.message}>
          Buscando Pokémon...
        </Text>
      )}

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      {pokemon && (
        <View style={styles.pokemonContainer}>
          <Text style={styles.pokemonName}>
            {pokemon.name.toUpperCase()}
          </Text>

          {pokemon.image && (
            <Image
              source={{ uri: pokemon.image }}
              style={styles.image}
            />
          )}

          <View style={styles.imagesRow}>
            {pokemon.imageFront && (
              <Image
                source={{ uri: pokemon.imageFront }}
                style={styles.smallImage}
              />
            )}

            {pokemon.imageBack && (
              <Image
                source={{ uri: pokemon.imageBack }}
                style={styles.smallImage}
              />
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  searchContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    width: 50,
    height: 50,
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 22,
  },

  message: {
    textAlign: "center",
    fontSize: 16,
  },

  error: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },

  pokemonContainer: {
    alignItems: "center",
  },

  pokemonName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  image: {
    width: 250,
    height: 250,
  },

  imagesRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },

  smallImage: {
    width: 100,
    height: 100,
  },
});