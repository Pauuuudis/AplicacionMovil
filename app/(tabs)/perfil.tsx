import { StyleSheet, Text, View } from "react-native";

export default function TabPerfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tab: Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 22, fontWeight: "bold" },
});