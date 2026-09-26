import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Pokemon = {
  id: number;
  name: string;

  image: string | null;
  imageFront: string | null;
  imageBack: string | null;

  height: number;
  weight: number;

  species: string;

  moves: string[];

  stats: {
    name: string;
    value: number;
  }[];
};

type PokemonContextType = {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  buscarPokemon: (nombre: string) => Promise<void>;
};

const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);

export function PokemonProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buscarPokemon = async (nombre: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "http://172.20.10.2:3000/consultaPokemon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pokemon: nombre,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "No se pudo encontrar el Pokémon"
        );
      }

      setPokemon(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        loading,
        error,
        buscarPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      "usePokemon debe utilizarse dentro de PokemonProvider"
    );
  }

  return context;
}