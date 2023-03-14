import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { api } from "../../../service/api";

interface RouteParams {
  pokemonId: number;
}

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}
interface Abilitiy {
  ability: {
    name: string;
  };
}
export type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

interface PokemonTypes {
  type: {
    name: TypeName;
  };
}
interface IPokemonsProps {
  id: number;
  name: string;
  stats: Stat[];
  abilities: Abilitiy[];
  color: string;
  types: PokemonTypes[];
}

export default function useGetAboutPokemon() {
  const { colors } = useTheme();

  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;

  const [pokemonDetail, setPokemonDetail] = useState({} as IPokemonsProps);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPokemonDetail() {
    try {
      const response = await api.get(`/pokemon/${pokemonId}`);
      const { stats, abilities, id, name, types } = response.data;

      const currentType = types[0].type.name as TypeName;
      const color = colors.backgroundCard[currentType];

      setPokemonDetail({ stats, abilities, id, name, types, color });
    } catch (err) {
      Alert.alert("Ops, deu erro!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return {
    pokemonDetail,
    isLoading,
  };
}
