import { PokemonTypeContainer, PokemonTypeText, PokemonType } from "./styles";


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

interface PokemonTypeProps {
    types: PokemonTypes;
    text: React.ReactNode;
}

export default function TypesPokemon({types, text} : PokemonTypeProps) {
    return (
        <PokemonTypeContainer>
            <PokemonType type={types.type.name}>
                <PokemonTypeText>{text}</PokemonTypeText>
            </PokemonType>
        </PokemonTypeContainer>    
    )
}