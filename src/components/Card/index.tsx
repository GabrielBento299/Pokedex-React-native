import { TouchableOpacityProps } from "react-native";
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
    RightSide,
    PokeballDetail,
    PokemonImage
} 
from "./styles";

import DotsImage from '../../assets/img/dots.png';
import PokeballImage from '../../assets/img/pokeballCard.png';
import CardAnimation from "../CardAnimation";
import { View } from "react-native";

type CardProps = {
    pokemon: IPokemonApi;
} & TouchableOpacityProps

export default function Card({ pokemon, ...rest } : CardProps) {
    return (
        <View style={{paddingHorizontal: 20}}>
        <CardContainer type={pokemon.types[0].type.name} {...rest}>
            <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>

                <ImageCardDetailLeftSide source={DotsImage} />
                
                <PokemonContextType>
                    {pokemon.types.map((pokemonType) => (
                    <PokemonType type={pokemonType.type.name} key={pokemonType.type.name}>
                        <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
                    </PokemonType>
                    ))}
                </PokemonContextType>
            </LeftSide>

            <RightSide>
                <PokeballDetail source={PokeballImage} />
                <CardAnimation>
                <PokemonImage 
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                    }} 
                />
                </CardAnimation>
            </RightSide>
        </CardContainer>
        </View>
    )
}