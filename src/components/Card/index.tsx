import { Text, TouchableOpacityProps } from "react-native";
import { IPokemonApi } from "../../pages/Home";
import { 
    CardContainer, 
    LeftSide, 
    PokemonId,
    PokemonName,
    ImageCardDetailLeftSide,
    PokemonContextType,
    PokemonType,
    PokemonTypeText,
    RightSide 
} 
from "./styles";

import DotsImage from '../../assets/img/dots.png';

type CardProps = {
    pokemon: IPokemonApi;
} & TouchableOpacityProps

export default function Card({ pokemon, ...rest } : CardProps) {
    return (
        <CardContainer type={pokemon.types[0].type.name} {...rest}>
            <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>
                <ImageCardDetailLeftSide source={DotsImage} />
                <PokemonContextType>
                    {pokemon.types.map((pokemonType) => (
                    <PokemonType type={pokemon.types[0].type.name} key={pokemonType.type.name}>
                        <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
                    </PokemonType>
                    ))}
                </PokemonContextType>
            </LeftSide>

            <RightSide></RightSide>
        </CardContainer>
    )
}