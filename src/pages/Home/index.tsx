import React, { useEffect, useState } from "react";
import { FlatList, Text, View, ViewBase } from "react-native";
import Card from "../../components/Card";
import { api } from "../../service/api";
import { HomeContainer, TextTitle } from "./styles";

interface IPokemonType {
    type: {
        name: string;
    };
}

export interface IPokemonApi {
    id: number;
    name: string;
    url: string;
    types: IPokemonType[];
}

interface IRequest {
    id: number;
    types: IPokemonType[];
}

export default function Home() {
    const [pokemons, setPokemons] = useState<IPokemonApi[]>([]);

    async function getAllPokemons() {
        const response = await api.get("/pokemon");
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon: IPokemonApi) => {
                const { id, types } = await getMoreInfo(pokemon.url)
                
                return {
                    id,
                    types,
                    name: pokemon.name
                }
            })
        )
        setPokemons(payloadPokemons);
    }

    async function getMoreInfo(url: string):Promise<IRequest> {
        const response = await api.get(url);
        const {id, types} = response.data;

        return { id, types };
    }

    useEffect(() => {
        getAllPokemons();
    }, []);


    return (
        <HomeContainer>
           <TextTitle>Pokédex</TextTitle>
           <FlatList 
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                <Card pokemon={pokemon} />      
            )}
           />
        </HomeContainer>
    )
}