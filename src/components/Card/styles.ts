import styled, { css } from 'styled-components/native';

interface IPokemonProps {
    type: string;
}

export const CardContainer = styled.TouchableOpacity<IPokemonProps>`
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

export const PokemonId = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        margin-top: 6px;
        text-transform: capitalize;
        color: ${theme.colors.background};
  `}
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

export const PokemonType = styled.View<IPokemonProps>`
    ${({theme, type}) => css`
        width: 64px;
        height: 26px;
        border-radius: 3px;
        margin-left: 5px;
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

export const RightSide = styled.View`
  ${({theme}) => css`
        
        `}
`;
