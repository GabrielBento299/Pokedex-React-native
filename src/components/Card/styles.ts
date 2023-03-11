import styled, { css } from 'styled-components/native';
import { TypeName } from '../../pages/AboutPokemon';

interface TypeProps {
    type: TypeName;
};

export const CardContainer = styled.TouchableOpacity<TypeProps>`
  ${({theme, type}) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 20px;
    flex-direction: row;
  `}
`;

export const LeftSide = styled.View`
    width: 50%;
    position: relative;
`;

export const ImageCardDetailLeftSide = styled.Image`
    position: absolute;
    flex-direction: row;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
`;

export const PokemonContextType = styled.View`
    flex-direction: row;
    gap: 6px;
`;

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
`;


export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
`;

export const PokemonImage = styled.Image`
    width: 130px;
    height: 130px;
    margin-top: -50px;
`;
