import styled, { css } from 'styled-components/native';

export const WelcomeContainer = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`;

export const Content = styled.View`
    height: 70%;
`;

export const Footer = styled.View`
    ${({theme}) => css`
        height: 30%;
        background-color: ${theme.colors.backgroundCard.water};
        border-top-right-radius: 22px;
        border-top-left-radius: 22px;
    `}
`;
