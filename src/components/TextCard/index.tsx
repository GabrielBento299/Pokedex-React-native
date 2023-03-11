import { PokemonId, PokemonName } from "./styles";

 
interface ITextCardPokemon {
    pokemonId: number;
    pokemonName: string;
    sizeId?: number;
    sizeName?: number;
}

export default function TextCard({ pokemonId, pokemonName, sizeId, sizeName  }: ITextCardPokemon ) {
    return (
        <>
            <PokemonId sizeId={sizeId}>#{pokemonId}</PokemonId>
            <PokemonName sizeName={sizeName}>{pokemonName}</PokemonName> 
        </>   
    )
}