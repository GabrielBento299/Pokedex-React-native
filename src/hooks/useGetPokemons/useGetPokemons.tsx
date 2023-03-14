import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Alert } from "react-native";

interface IPokemonType {
  type: {
    name: string;
  };
}

export type TypeName = 
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground';

interface PokemonTypes {
    type: {
        name: TypeName;
    }
}

export interface IPokemonApi {
    id: number;
    name: string;
    url: string;
    types: PokemonTypes[];
}

interface IRequest {
  id: number;
  types: IPokemonType[];
}

export default function useGetPokemons() {
  const [pokemons, setPokemons] = useState<IPokemonApi[]>([]);
  const [isLoader, setIsLoader] = useState(true);

  async function getAllPokemons() {
    const limitPagesUrl = 60;

    try {
      setIsLoader(true);

      const response = await api.get(`/pokemon?limit=${limitPagesUrl}&offset=0`);

      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: IPokemonApi) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            id,
            types,
            name: pokemon.name,
          };
        })
      );
      setPokemons(payloadPokemons);
    } catch (err) {
      Alert.alert("ops, algo de errado aconteceu, tente mais tarde");
    } finally {
      setIsLoader(false);
    }
  }

  async function getMoreInfo(url: string): Promise<IRequest> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return { id, types };
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return {
    pokemons,
    isLoader,
  };
}
