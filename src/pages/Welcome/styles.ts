import styled, { css } from 'styled-components/native';

export const WelcomeContainer = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundCard.water};
    `}
`;

export const Content = styled.View`
    ${({ theme }) => css`
        background: ${theme.colors.backgroundCard.water};
        height: 70%;
        align-items:center
        justify-content: center;
  `}
    
`;

export const WrapperAnimation = styled.View`
    ${({theme}) => css`
        width: 200px;
        height: 300px;
        background: ${theme.colors.boxType.eletric};
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
    padding-right: 8px;
`;

export const Footer = styled.View`
    ${({theme}) => css`
        align-items: center;
        justify-content: center;
        height: 30%;
        border-top-right-radius: 22px;
        border-top-left-radius: 22px;
        gap: 18px;
        background-color: ${theme.colors.background};
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 40px;
        color: ${theme.colors.background};
        margin-top: 20px;
    `}
`;  

export const Subtitle = styled.Text`
     ${({theme}) => css`
        font-size: 16px;
        color: ${theme.colors.background};
    `}
`;