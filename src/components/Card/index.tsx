import { TouchableOpacityProps } from "react-native";
import { IPokemonApi } from "../../pages/Home";
import {
  CardContainer,
  LeftSide,
  ImageCardDetailLeftSide,
  PokemonContextType,
  RightSide,
  PokeballDetail,
  PokemonImage,
} from "./styles";

import DotsImage from "../../assets/img/dots.png";
import PokeballImage from "../../assets/img/pokeballCard.png";
import CardAnimation from "../CardAnimation";
import { View } from "react-native";
import TypesPokemon from "../TypesPokemon";
import TextCard from "../TextCard";

type CardProps = {
  pokemon: IPokemonApi;
} & TouchableOpacityProps;

export default function Card({ pokemon, ...rest }: CardProps) {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <CardContainer type={pokemon.types[0].type.name} {...rest}>
        <LeftSide>
          <TextCard 
            pokemonId={pokemon.id}
            pokemonName={pokemon.name}
          />

          <ImageCardDetailLeftSide source={DotsImage} />

          <PokemonContextType>
            {pokemon.types.map((pokemonType) => (
              <TypesPokemon
                key={pokemonType.type.name}
                types={pokemonType}
                text={pokemonType.type.name}
              />
            ))}
          </PokemonContextType>
        </LeftSide>

        <RightSide>
          <PokeballDetail source={PokeballImage} />
          <CardAnimation>
            <PokemonImage
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
            />
          </CardAnimation>
        </RightSide>
      </CardContainer>
    </View>
  );
}
