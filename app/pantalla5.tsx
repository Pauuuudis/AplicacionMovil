import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Pantalla5() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla5</Text>

      <Text style={styles.boton} onPress={() => router.back()}>
        ⬅ Volver
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  boton: {
    backgroundColor: "#2f6fed",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    overflow: "hidden",
  },
});