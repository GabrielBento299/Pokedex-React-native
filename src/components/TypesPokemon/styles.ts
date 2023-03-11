import styled, { css } from 'styled-components/native';
import { TypeName } from '../../pages/AboutPokemon';

interface TypeProps {
    type: TypeName;
};

export const PokemonTypeContainer = styled.View`
         flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
    ${({theme, type}) => css`
        width: 64px;
        height: 26px;
        border-radius: 3px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
    ${({theme}) => css`
        font-weight: 500;
        font-size: 12px;
        text-transform: capitalize;
        color: ${theme.colors.background};
  `}
`;