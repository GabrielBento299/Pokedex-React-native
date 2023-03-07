import styled, { css } from 'styled-components/native';

export const WelcomeContainer = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`;

export const Content = styled.View`
    height: 60%;
`;

export const Footer = styled.View`
    ${({theme}) => css`
        align-items: center;
        justify-content: center;
        height: 40%;
        background-color: ${theme.colors.backgroundCard.water};
        border-top-right-radius: 22px;
        border-top-left-radius: 22px;
        gap: 18px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        color: ${theme.colors.background};
    `}
`;  

export const Subtitle = styled.Text`
     ${({theme}) => css`
        font-size: 14px;
        color: ${theme.colors.background};
    `}
`;