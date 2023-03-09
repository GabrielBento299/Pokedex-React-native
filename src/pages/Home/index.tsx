import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View  } from "react-native";
import Card from "../../components/Card";
import { api } from "../../service/api";
import { HomeContainer, HeaderImage, TextTitle, TextLoad } from "./styles";
import PokeballHeaderImg from '../../../assets/adaptive-icon.png';
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

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
    const { navigate, goBack } = useNavigation();

    const [pokemons, setPokemons] = useState<IPokemonApi[]>([]);
    const [isLoader, setIsLoader] = useState(true);

    function HandleNavigation(pokemonId: number) {
        navigate("About", {
            pokemonId,
        });
    }


    async function getAllPokemons() {
        try {
            const limitPagesUrl = 30;
            setIsLoader(true);
            const response = await api.get(`/pokemon?limit=${limitPagesUrl}&offset=0`);
            const { results } = response.data;
            
            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: IPokemonApi) => {
                    const { id, types } = await getMoreInfo(pokemon.url)
                    
                    return {
                        id,
                        types,
                        name: pokemon.name
                    }
                }),
                )
            setPokemons(payloadPokemons);
        } catch (err) {
            Alert.alert('ops, algo de errado aconteceu, tente mais tarde');
        } finally{
            setIsLoader(false);
        }
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
           {isLoader ? <TextLoad>Carregando...</TextLoad> 
            : 
           <FlatList 
            ListHeaderComponent={
                <>
                    <HeaderImage source={PokeballHeaderImg} /> 
                    <TextTitle>Pokédex</TextTitle>
                    {/* <Button title="Voltar" onPress={() => goBack()} /> */}
                </>
            }
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                <Card 
                    pokemon={pokemon} 
                    onPress={() => HandleNavigation(pokemon.id)} 
                />      
            )}
           />
        }
        </HomeContainer>
    )
}