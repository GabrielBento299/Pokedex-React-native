import styled, { css } from 'styled-components/native';
import { LogBox } from 'react-native'

LogBox.ignoreLogs([`to contain units`]);

interface TextCardProps {
  sizeId?: number;
  sizeName?: number;
}

export const PokemonId = styled.Text<TextCardProps>`
    ${({theme, sizeId}) => css`
        font-weight: bold;
        line-height: 14px;
        font-size: ${sizeId ? sizeId : '12px'};
        color: ${theme.colors.light_text};
   `}
`;

export const PokemonName = styled.Text<TextCardProps>`
    ${({theme, sizeName}) => css`
        font-weight: bold;
        margin-top: 6px;
        text-transform: capitalize;
        font-size: ${sizeName ? sizeName : '24px'};
        color: ${theme.colors.background};
  `}

`;


