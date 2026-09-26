import { Stack } from "expo-router";
import { PokemonProvider } from "../context/PokemonContext";

export default function RootLayout() {
  return (
    <PokemonProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Inicio" }}
        />

        <Stack.Screen
          name="pantalla2"
          options={{ title: "Pantalla 2" }}
        />

        <Stack.Screen
          name="pantalla3"
          options={{ title: "Pantalla 3" }}
        />

        <Stack.Screen
          name="pantalla4"
          options={{ title: "Pantalla 4" }}
        />

        <Stack.Screen
          name="pantalla5"
          options={{ title: "Pantalla 5" }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </PokemonProvider>
  );
}