import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";

const PlaceholderImage = require("../assets/images/react-logo.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceholderImage} />
      <Button label="Elegir una foto" onPress={() => alert("¡Botón presionado!")} />
      <Text style={styles.titulo}>Pantalla 1: Inicio</Text>

      <Link href="/pantalla2" style={styles.boton}>Ir a Pantalla 2</Link>
      <Link href="/pantalla3" style={styles.boton}>Ir a Pantalla 3</Link>
      <Link href="/pantalla4" style={styles.boton}>Ir a Pantalla 4</Link>
      <Link href="/pantalla5" style={styles.boton}>Ir a Pantalla 5</Link>
      <Link href="/(tabs)" style={styles.boton}>Ir a Tabs</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  boton: {
    backgroundColor: "#2f6fed",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
    textAlign: "center",
  },
});