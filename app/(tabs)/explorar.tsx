import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import { usePokemon } from "../../context/PokemonContext";

export default function Explorar() {
  const { pokemon } = usePokemon();

  if (!pokemon) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          No hay un Pokémon seleccionado
        </Text>

        <Text style={styles.emptyText}>
          Busca primero un Pokémon en la pantalla principal.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Información del Pokémon
      </Text>

      <Text style={styles.name}>
        {pokemon.name.toUpperCase()}
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>
          ID: <Text style={styles.value}>{pokemon.id}</Text>
        </Text>

        <Text style={styles.label}>
          Especie:{" "}
          <Text style={styles.value}>{pokemon.species}</Text>
        </Text>

        <Text style={styles.label}>
          Altura:{" "}
          <Text style={styles.value}>{pokemon.height}</Text>
        </Text>

        <Text style={styles.label}>
          Peso:{" "}
          <Text style={styles.value}>{pokemon.weight}</Text>
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Estadísticas
      </Text>

      <View style={styles.infoBox}>
        {pokemon.stats.map((stat) => (
          <View key={stat.name} style={styles.statRow}>
            <Text style={styles.statName}>
              {stat.name}
            </Text>

            <Text style={styles.statValue}>
              {stat.value}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        Movimientos
      </Text>

      <View style={styles.movesContainer}>
        {pokemon.moves.slice(0, 20).map((move) => (
          <View key={move} style={styles.move}>
            <Text style={styles.moveText}>
              {move}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: "bold",
  },

  value: {
    fontWeight: "normal",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  statName: {
    fontSize: 16,
  },

  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  movesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  move: {
    backgroundColor: "#e63946",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  moveText: {
    color: "white",
    fontSize: 13,
  },
});